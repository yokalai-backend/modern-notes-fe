"use client";

import AddNotes from "@/app/components/menu/AddNotes";
import Filter from "@/app/components/menu/Filter";
import Footer from "@/app/components/menu/Footer";
import Header from "@/app/components/menu/Header";
import Notes from "@/app/components/menu/Notes";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <main className="bg-black/75 min-h-screen font-mono">
      <Header />
      <Filter />
      <Notes router={router} />
      <AddNotes router={router} />
      <Footer />
    </main>
  );
}
