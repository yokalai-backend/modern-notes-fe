"use client";

import AddNotes from "@/app/components/menu/AddNotes";
import Filter from "@/app/components/menu/Filter";
import Footer from "@/app/components/menu/Footer";
import Header from "@/app/components/menu/Header";
import Notes from "@/app/components/menu/Notes";
import OpenSearchBar from "@/app/components/menu/OpenSearchBar";
import SearchNotes from "@/app/components/menu/SearchNotes";
import useInput from "@/app/hooks/useInput";
import { NoteProps } from "@/app/types/global";
import { CurrentPositionProps, SortingBy } from "@/app/types/menu";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [currPosition, setCurrPosition] = useState<CurrentPositionProps>();
  const [sortedBy, setSortedBy] = useState<SortingBy>("last created at");
  const [notes, setNotes] = useState<NoteProps[]>([]);

  const search = useInput();
  const searchRef = useRef<HTMLTextAreaElement>(null);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    const lastViewPos = localStorage.getItem("view") as CurrentPositionProps;
    if (lastViewPos) {
      setCurrPosition(lastViewPos);
    }
  }, []);

  useEffect(() => {
    if (currPosition === undefined) return;
    localStorage.setItem("view", currPosition);
  }, [currPosition]);

  return (
    <>
      <main className="bg-black/75 min-h-screen font-mono">
        <Header />
        <Filter
          setNotes={setNotes}
          sortedBy={sortedBy!}
          setSortedBy={setSortedBy}
        />
        <Notes
          router={router}
          currPosition={currPosition}
          search={search}
          notes={notes}
          setNotes={setNotes}
        />
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
            <OpenSearchBar setIsSearch={setIsSearch} />
          )}
        </>
      )}
    </>
  );
}
