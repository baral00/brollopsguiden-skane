import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Bröllopsplanering och checklista",
  description:
    "Planera ert bröllop i Skåne med checklistor, budgetsteg och tidslinje för vigsel, leverantörer, musik, mat och dekoration.",
  path: "/planering",
  keywords: [
    "bröllopsplanering Skåne",
    "bröllopschecklista",
    "budget bröllop Skåne",
    "planera bröllop",
    "bröllopschecklista pdf",
  ],
});

export default function PlanningLayout({ children }: { children: React.ReactNode }) {
  return children;
}
