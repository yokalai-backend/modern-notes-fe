"use client";

import EditingArea from "@/app/components/editing/EditingArea";
import Header from "@/app/components/editing/Header";

export default function Menu() {
  return (
    <main className="bg-black/75 min-h-screen flex flex-col gap-2">
      <Header />
      <EditingArea />
    </main>
  );
}
