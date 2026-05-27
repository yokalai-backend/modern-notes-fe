"use client";

import AddNotes from "@/app/components/menu/AddNotes";
import Filter from "@/app/components/menu/Filter";
import Footer from "@/app/components/menu/Footer";
import Header from "@/app/components/menu/Header";
import Notes from "@/app/components/menu/Notes";
import { CurrentPositionProps } from "@/app/types/menu";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [currPosition, setCurrPosition] =
    useState<CurrentPositionProps>("notes");
  const router = useRouter();

  useEffect(() => {
    const lastViewMode = localStorage.getItem("view") as "notes" | "grid";

    if (!lastViewMode) return;
    setCurrPosition(lastViewMode);
  }, []);

  useEffect(() => {
    if (currPosition === "notes" || currPosition === "grid") {
      localStorage.setItem("view", currPosition);
    }
  }, [currPosition]);

  return (
    <main className="bg-black/75 min-h-screen font-mono">
      <Header />
      <Filter />
      <Notes router={router} currPosition={currPosition} />
      <AddNotes router={router} />
      <Footer currPosition={currPosition} setCurrPosition={setCurrPosition} />
    </main>
  );
}
