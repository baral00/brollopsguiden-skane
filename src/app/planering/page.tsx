"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  PieChart as PieChartIcon,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import {
  timelineMilestones,
  budgetCategories,
  swedishAverageWeddingCost,
} from "@/data/planning";

export default function PlaneringPage() {
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    if (typeof window === "undefined") return "";

    try {
      return window.localStorage.getItem("planningSelectedDate") ?? "";
    } catch {
      return "";
    }
  });
  const [expandedMilestone, setExpandedMilestone] = useState<string | null>("12-months");
  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>(() => {
    if (typeof window === "undefined") return {};

    try {
      const storedTasks = window.localStorage.getItem("planningCheckedTasks");
      return storedTasks ? (JSON.parse(storedTasks) as Record<string, boolean>) : {};
    } catch {
      return {};
    }
  });

  // Budget calculator state
  const [budgetInputs, setBudgetInputs] = useState<Record<string, number>>(
    budgetCategories.reduce((acc, cat) => ({ ...acc, [cat.id]: 0 }), {})
  );

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const toggleMilestone = (id: string) => {
    setExpandedMilestone(expandedMilestone === id ? null : id);
  };

  const handleBudgetChange = (category: string, value: string) => {
    const numValue = parseFloat(value) || 0;
    setBudgetInputs((prev) => ({ ...prev, [category]: numValue }));
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.setItem("planningCheckedTasks", JSON.stringify(checkedTasks));
      window.localStorage.setItem("planningSelectedDate", selectedDate);
    } catch {
      // Ignore localStorage write errors and keep the UI usable.
    }
  }, [checkedTasks, selectedDate]);

  const toggleTask = (taskId: string) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  const resetChecklist = () => {
    setCheckedTasks({});
  };

  // Calculate total budget
  const totalBudget = Object.values(budgetInputs).reduce((sum, val) => sum + val, 0);

  // Prepare pie chart data
  const pieData = budgetCategories
    .map((cat) => ({
      name: cat.name,
      value: budgetInputs[cat.id] || 0,
      color: cat.color,
    }))
    .filter((item) => item.value > 0);

  const completedTaskCount = Object.values(checkedTasks).filter(Boolean).length;
  const totalTaskCount = timelineMilestones.reduce((sum, milestone) => sum + milestone.tasks.length, 0);

  const wrapText = (text: string, maxLength: number) => {
    const words = text.split(/\s+/);
    const lines: string[] = [];
    let currentLine = "";

    words.forEach((word) => {
      const nextLine = currentLine ? `${currentLine} ${word}` : word;

      if (nextLine.length <= maxLength) {
        currentLine = nextLine;
      } else {
        if (currentLine) {
          lines.push(currentLine);
        }
        currentLine = word;
      }
    });

    if (currentLine) {
      lines.push(currentLine);
    }

    return lines;
  };

  const escapePdfText = (value: string) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\\/g, "\\\\")
      .replace(/\(/g, "\\(")
      .replace(/\)/g, "\\)");

  const buildPlanningPdf = () => {
    const lines: string[] = [
      "Brollopsguiden Skane - Planeringschecklista",
      selectedDate ? `Valt datum: ${selectedDate}` : "Valt datum: inget datum valt",
      `Avklarade uppgifter: ${completedTaskCount} av ${totalTaskCount}`,
      "",
    ];

    timelineMilestones.forEach((milestone) => {
      lines.push(`${milestone.title}`);

      milestone.tasks.forEach((task) => {
        const status = checkedTasks[task.id] ? "[x]" : "[ ]";
        const cost =
          task.estimatedCost ? ` (Fran ${task.estimatedCost.min.toLocaleString("sv-SE")} SEK)` : "";

        wrapText(`${status} ${task.title}${cost}`, 82).forEach((line, index) => {
          lines.push(index === 0 ? line : `    ${line}`);
        });
      });

      lines.push("");
    });

    const pageLineLimit = 42;
    const pages: string[][] = [];

    for (let index = 0; index < lines.length; index += pageLineLimit) {
      pages.push(lines.slice(index, index + pageLineLimit));
    }

    const objects: string[] = [];
    objects.push("<< /Type /Catalog /Pages 2 0 R >>");

    const pageObjectNumbers = pages.map((_, index) => 4 + index * 2);
    objects.push(`<< /Type /Pages /Kids [${pageObjectNumbers.map((num) => `${num} 0 R`).join(" ")}] /Count ${pages.length} >>`);
    objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");

    pages.forEach((pageLines, pageIndex) => {
      const pageObjectNumber = 4 + pageIndex * 2;
      const contentObjectNumber = pageObjectNumber + 1;

      const contentCommands = [
        "BT",
        "/F1 18 Tf",
        "50 770 Td",
      ];

      pageLines.forEach((line, lineIndex) => {
        if (lineIndex === 0) {
          contentCommands.push(`(${escapePdfText(line)}) Tj`);
          contentCommands.push("0 -24 Td");
          contentCommands.push("/F1 11 Tf");
        } else {
          contentCommands.push(`(${escapePdfText(line)}) Tj`);
          contentCommands.push("0 -15 Td");
        }
      });

      contentCommands.push("ET");

      const contentStream = contentCommands.join("\n");
      objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R >> >> /Contents ${contentObjectNumber} 0 R >>`);
      objects.push(`<< /Length ${contentStream.length} >>\nstream\n${contentStream}\nendstream`);
    });

    let pdf = "%PDF-1.4\n";
    const offsets: number[] = [0];

    objects.forEach((object, index) => {
      offsets.push(pdf.length);
      pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
    });

    const xrefStart = pdf.length;
    pdf += `xref\n0 ${objects.length + 1}\n`;
    pdf += "0000000000 65535 f \n";

    offsets.slice(1).forEach((offset) => {
      pdf += `${offset.toString().padStart(10, "0")} 00000 n \n`;
    });

    pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

    return pdf;
  };

  const handleDownloadGuide = () => {
    if (typeof window === "undefined") return;

    const pdf = buildPlanningPdf();
    const blob = new Blob([pdf], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "brollopsguiden-planeringschecklista.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-20 pb-16 page-bg">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80"
          alt="Bröllopsplanering"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Calendar className="w-16 h-16 text-[#C9A96E] mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">
              Bröllopsplanering
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Steg för steg till ert drömbröllop med vår interaktiva planeringsguide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Date Picker Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-br from-[#C9A96E]/5 via-white to-[#D4A5A5]/5 border-none shadow-lg p-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-[#2C2C2C] text-center mb-4">
              När är ert bröllop?
            </h2>
            <p className="text-gray-600 text-center max-w-md mx-auto mb-6">
              Ange datumet för att få en personlig anpassad tidsplan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                placeholder="Välj datum"
                className="w-full max-w-xs text-center py-6 text-lg border-gray-200 focus:border-[#C9A96E]"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* Timeline Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-[#2C2C2C] mb-8 text-center">
          Planeringschecklista
        </h2>
        {selectedDate && (
          <div className="mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <p className="text-center text-sm text-gray-600">
              {completedTaskCount} av {totalTaskCount} uppgifter avklarade
            </p>
            <Button variant="outline" size="sm" onClick={resetChecklist}>
              Återställ alla
            </Button>
          </div>
        )}

        {/* Timeline */}
        <div className="relative space-y-4">
          {/* Vertical line */}
          {selectedDate && (
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C9A96E] via-[#D4A5A5] to-transparent rounded-full sm:left-6 sm:w-1" />
          )}

          {timelineMilestones.map((milestone, index) => {
            const isExpanded = expandedMilestone === milestone.id;

            return (
              <motion.div key={milestone.id}>
                {selectedDate && (
                  <div className="relative">
                    {/* Timeline marker */}
                    <div
                      className={`absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full text-[11px] transition-all duration-300 sm:h-12 sm:w-12 sm:text-xs ${
                        isExpanded
                          ? "bg-[#C9A96E] text-white scale-110"
                          : "bg-white border-2 border-[#C9A96E] text-[#C9A96E]"
                      }`}
                    >
                      {isExpanded ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        <span className="text-xs font-bold">{index + 1}</span>
                      )}
                    </div>

                    {/* Milestone card */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card
                        className={`cursor-pointer transition-all duration-300 border ${
                          isExpanded
                            ? "border-[#C9A96E]/40 bg-gradient-to-r from-[#C9A96E]/5 to-transparent"
                            : "border-gray-100 hover:border-[#C9A96E]/20"
                        }`}
                        onClick={() => toggleMilestone(milestone.id)}
                      >
                        <div className="py-4 pl-11 pr-3 sm:pl-14 sm:pr-6">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0 flex-1">
                              <CardTitle className="text-base leading-snug text-[#2C2C2C] sm:text-lg">
                                {milestone.title}
                              </CardTitle>
                              {selectedDate && (
                                <CardDescription className="mt-1 text-xs leading-5 sm:text-sm">
                                  {milestone.monthsBefore === -1
                                    ? "Idag!"
                                    : milestone.monthsBefore === 0.2
                                      ? "Om cirka en vecka"
                                      : `Cirka ${milestone.monthsBefore} månader innan`}
                                </CardDescription>
                              )}
                            </div>
                            <button
                              type="button"
                              className="shrink-0 text-[#C9A96E] hover:text-[#D4A5A5] transition-colors"
                            >
                              {isExpanded ? (
                                <ChevronUp className="w-5 h-5" />
                              ) : (
                                <ChevronDown className="w-5 h-5" />
                              )}
                            </button>
                          </div>

                          {/* Expanded tasks */}
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pt-4 mt-4 border-t border-gray-100"
                            >
                              <ul className="space-y-3">
                                {milestone.tasks.map((task) => (
                                  <li
                                    key={task.id}
                                    className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-3"
                                  >
                                    <div className="flex min-w-0 flex-1 items-start gap-3">
                                      <button
                                        type="button"
                                        onClick={(event) => {
                                          event.stopPropagation();
                                          toggleTask(task.id);
                                        }}
                                        className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-colors ${
                                          checkedTasks[task.id]
                                            ? "border-[#C9A96E] bg-[#C9A96E] text-white"
                                            : "border-gray-300 bg-white text-transparent hover:border-[#C9A96E]"
                                        }`}
                                        aria-label={`Markera uppgiften ${task.title}`}
                                        aria-pressed={checkedTasks[task.id] ? "true" : "false"}
                                      >
                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                      </button>
                                      <span
                                        className={`text-sm leading-6 sm:text-base ${
                                          checkedTasks[task.id]
                                            ? "text-gray-400 line-through"
                                            : "text-gray-700"
                                        }`}
                                      >
                                        {task.title}
                                      </span>
                                    </div>
                                    {task.estimatedCost && (
                                      <Badge
                                        variant="secondary"
                                        className="self-start text-xs whitespace-normal sm:ml-auto sm:self-auto sm:whitespace-nowrap"
                                      >
                                        Från {task.estimatedCost.min.toLocaleString("sv-SE")} SEK
                                      </Badge>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            );
          })}

          {!selectedDate && (
            <div className="text-center py-12 text-gray-500 italic">
              Välj ett datum ovan för att se din personliga tidsplan!
            </div>
          )}
        </div>
      </section>

      {/* Budget Planerare Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-br from-[#C9A96E]/5 via-white to-[#D4A5A5]/5 border-none shadow-lg overflow-hidden">
          <div className="p-8 space-y-8">
            {/* Header */}
            <div className="text-center pb-6 border-b border-gray-100">
              <PieChartIcon className="w-12 h-12 text-[#C9A96E] mx-auto mb-4" />
              <h2 className="text-3xl font-serif text-[#2C2C2C] mb-4">Budgetplanerare</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Planera och spåra ert bröllopsbudget. Den genomsnittliga kostnaden för ett bröllop i Sverige är cirka {swedishAverageWeddingCost.toLocaleString("sv-SE")} SEK.
              </p>
            </div>

            {/* Budget inputs and chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Inputs */}
              <div className="space-y-4">
                {budgetCategories.map((category) => (
                  <div key={category.id} className="flex items-center gap-4">
                    <div
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: category.color }}
                    />
                    <label htmlFor={category.id} className="flex-1 text-sm font-medium text-[#2C2C2C]">
                      {category.name}
                    </label>
                    <div className="relative">
                      <Input
                        id={category.id}
                        type="number"
                        value={budgetInputs[category.id] || ""}
                        onChange={(e) => handleBudgetChange(category.id, e.target.value)}
                        placeholder="0"
                        className="w-32 pr-8 text-right py-2 text-sm border-gray-200 focus:border-[#C9A96E]"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                        SEK
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg border border-gray-100 p-4 min-h-[320px] flex items-center justify-center">
                  {totalBudget > 0 ? (
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value: unknown) => [
                            `${typeof value === 'number' ? value.toLocaleString('sv-SE') : '0'} SEK`,
                          ]}
                          contentStyle={{
                            backgroundColor: "#2C2C2C",
                            color: "white",
                            borderRadius: "8px",
                            padding: "10px 15px",
                            border: "none",
                          }}
                        />
                        <Legend verticalAlign="bottom" height={36} />
                      </PieChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="text-center text-gray-400">
                      <PieChartIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>Ange belopp för att se din budgetfördelning</p>
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="bg-gradient-to-r from-[#C9A96E]/10 to-[#D4A5A5]/10 rounded-lg p-6 text-center">
                  <p className="text-sm font-medium text-gray-600 mb-2">Total budget</p>
                  <p className="text-3xl font-bold text-[#2C2C2C]">
                    {totalBudget.toLocaleString("sv-SE")} SEK
                  </p>
                  {totalBudget > 0 && (
                    <p className="text-xs text-gray-500 mt-2">
                      {((totalBudget / swedishAverageWeddingCost) * 100).toFixed(1)}% av svensk genomsnittskostnad
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* PDF Download Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-br from-[#D4A5A5]/10 via-white to-[#C9A96E]/10 border-none shadow-lg p-12 text-center">
          <Download className="w-12 h-12 text-[#C9A96E] mx-auto mb-4" />
          <h3 className="text-2xl font-serif text-[#2C2C2C] mb-4">
            Ladda ner vår kostnadsfria bröllopsguide (PDF)
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            En komplett checklista och mallar för att hjälpa er planera det perfekta bröllopet.
          </p>
          <Button size="lg" className="gap-2" onClick={handleDownloadGuide}>
            <Download className="w-4 h-4" />
            Ladda ner guide
          </Button>
        </Card>
      </section>
    </div>
  );
}
