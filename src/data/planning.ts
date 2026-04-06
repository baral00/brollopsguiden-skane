export interface TimelineMilestone {
  id: string;
  monthsBefore: number; // -1 means "day of"
  title: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  estimatedCost?: { min: number; max: number };
}

export interface BudgetCategory {
  id: string;
  name: string;
  defaultPercentage: number; // Percentage of total budget
  averageAmount: number; // Average amount in SEK for Sweden
  color: string;
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: "12-months",
    monthsBefore: 12,
    title: "12 månader innan",
    tasks: [
      { id: "t1", title: "Bestäm bröllopsbudget", estimatedCost: { min: 150000, max: 300000 } },
      { id: "t2", title: "Boka bröllopslokal", estimatedCost: { min: 30000, max: 80000 } },
      { id: "t3", title: "Välj bröllopsdatum" },
      { id: "t4", title: "Börja göra en gästlista (grovskiss)" },
      { id: "t5", title: "Bestäm bröllopetema och färgschema" },
    ],
  },
  {
    id: "9-months",
    monthsBefore: 9,
    title: "9 månader innan",
    tasks: [
      { id: "t6", title: "Boka fotograf/videograf", estimatedCost: { min: 15000, max: 35000 } },
      { id: "t7", title: "Boka musiker/DJ/liveband", estimatedCost: { min: 8000, max: 20000 } },
      { id: "t8", title: "Beställ brudklänning eller kostym", estimatedCost: { min: 10000, max: 30000 } },
      { id: "t9", title: "Boka florist", estimatedCost: { min: 5000, max: 15000 } },
      { id: "t10", title: "Boka brudtärnor och beställ kläder" },
    ],
  },
  {
    id: "6-months",
    monthsBefore: 6,
    title: "6 månader innan",
    tasks: [
      { id: "t11", title: "Boka catering/menyplanering (per person)", estimatedCost: { min: 250, max: 800 } },
      { id: "t12", title: "Beställ bröllopstårta" },
      { id: "t13", title: "Designa och skicka save-the-date-kort" },
      { id: "t14", title: "Boka transport för brudpärret och gäster" },
      { id: "t15", title: "Planera bröllopsresan (om tillämpligt)" },
    ],
  },
  {
    id: "3-months",
    monthsBefore: 3,
    title: "3 månader innan",
    tasks: [
      { id: "t16", title: "Skicka inbjudningar", estimatedCost: { min: 2000, max: 5000 } },
      { id: "t17", title: "Boka frisör och makeup-artist" },
      { id: "t18", title: "Köpa brudstrumpor, strumpbyxor och skor" },
      { id: "t19", title: "Beställ ringar om inte redan gjorda" },
      { id: "t20", title: "Planera bröllopsfesten (lekar, tävlingar)" },
    ],
  },
  {
    id: "1-month",
    monthsBefore: 1,
    title: "1 månad innan",
    tasks: [
      { id: "t21", title: "Bekräfta alla bokningar med leverantörer" },
      { id: "t22", title: "Skapa sittplaceringar" },
      { id: "t23", title: "Provsmaka meny och tårta" },
      { id: "t24", title: "Beställ eller designa bröllopsgåvor till gästerna" },
      { id: "t25", title: "Skriv bröllopstal om ni ska hålla några" },
    ],
  },
  {
    id: "1-week",
    monthsBefore: 0.2, // ~1 week
    title: "1 vecka innan",
    tasks: [
      { id: "t26", title: "Slutliga detaljer med alla leverantörer" },
      { id: "t27", title: "Packa för bröllopsresan (om tillämpligt)" },
      { id: "t28", title: "Ge ringbäraren bröllopsringarna" },
      { id: "t29", title: "Köp blommor till varandra (om ni vill ha det)" },
      { id: "t30", title: "Slappna av och vila!" },
    ],
  },
  {
    id: "wedding-day",
    monthsBefore: -1,
    title: "Bröllopsdagen!",
    tasks: [
      { id: "t31", title: "Vakna tidigt och äta frukost" },
      { id: "t32", title: "Följa dagens tidsschema" },
      { id: "t33", title: "Ta er tid att njuta av dagen tillsammans!" },
      { id: "t34", title: "Dansa, skratta och fira er kärlek!" },
    ],
  },
];

export const budgetCategories: BudgetCategory[] = [
  { id: "lokal", name: "Lokal & Catering", defaultPercentage: 40, averageAmount: 100000, color: "#D4A5A5" },
  {
    id: "klader",
    name: "Kläder & Smycken",
    defaultPercentage: 12,
    averageAmount: 30000,
    color: "#9CAF88",
  },
  { id: "foto-video", name: "Foto & Video", defaultPercentage: 10, averageAmount: 25000, color: "#C9A96E" },
  {
    id: "musik-underhallning",
    name: "Musik & Underhållning",
    defaultPercentage: 8,
    averageAmount: 20000,
    color: "#B89595",
  },
  { id: "blommor-dkor", name: "Blommor & Dekoration", defaultPercentage: 6, averageAmount: 15000, color: "#A3C4AC" },
  {
    id: "inbjudningar",
    name: "Inbjudningar & Stationering",
    defaultPercentage: 2,
    averageAmount: 4000,
    color: "#D4B896",
  },
  { id: "transport", name: "Transport & Taxi", defaultPercentage: 3, averageAmount: 7500, color: "#E8CBA8" },
  {
    id: "overnattning",
    name: "Övernattning för brudpar",
    defaultPercentage: 4,
    averageAmount: 10000,
    color: "#F5D7B6",
  },
  { id: "ringar", name: "Bröllopsringar", defaultPercentage: 5, averageAmount: 12500, color: "#FFE4E1" },
  {
    id: "ovrigt",
    name: "Övrigt & Reservfond",
    defaultPercentage: 10,
    averageAmount: 25000,
    color: "#F0E68C",
  },
];

export const swedishAverageWeddingCost = 250000; // SEK