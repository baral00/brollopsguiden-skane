import { ReactNode } from "react";
import { notFound } from "next/navigation";

export default function OmOssLayout({
  children,
}: {
  children: ReactNode;
}) {
  void children;
  notFound();
}
