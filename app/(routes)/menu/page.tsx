"use client";

import AddNotes from "@/app/components/menu/AddNotes";
import Filter from "@/app/components/menu/Filter";
import Footer from "@/app/components/menu/Footer";
import Header from "@/app/components/menu/Header";
import Notes from "@/app/components/menu/Notes";
import SearchNotes from "@/app/components/menu/SearchNotes";
import { CurrentPositionProps } from "@/app/types/menu";
import useInput from "@/app/hooks/useInput";

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const [currPosition, setCurrPosition] =
    useState<CurrentPositionProps>("notes");

  const search = useInput();
  const searchRef = useRef<HTMLTextAreaElement>(null);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (currPosition === "search") {
      searchRef.current?.focus();
    }
  }, [currPosition]);

  return (
    <>
      <main className="bg-black/75 min-h-screen font-mono">
        <Header />
        <Filter />
        <Notes router={router} currPosition={currPosition} search={search} />
        {currPosition !== "search" && <AddNotes router={router} />}
        {!isSearch && (
          <Footer
            currPosition={currPosition}
            setCurrPosition={setCurrPosition}
          />
        )}
      </main>
      {currPosition === "search" && (
        <>
          {isSearch ? (
            <SearchNotes
              search={search}
              searchRef={searchRef}
              setIsSearch={setIsSearch}
            />
          ) : (
            <main className="fixed bottom-15 w-full px-1 bg-linear-to-t from-black to-zinc-900 min-h-10 flex flex-col justify-end rounded-t-xl border-b border-b-white/30 mb-0.5">
              <p className="text-white font-mono absolute top-1 left-3">
                Search...
              </p>
              <button
                onClick={() => setIsSearch(true)}
                className="absolute text-white text-3xl top-0 right-3 cursor-pointer hover:opacity-70 transition-opacity"
              >
                ↑
              </button>
            </main>
          )}
        </>
      )}
    </>
  );
}
