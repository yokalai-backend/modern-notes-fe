import filteredNotes from "@/app/fragments/menu/filtered.notes";
import getNotesFromLocalStorage from "@/app/fragments/menu/get.notes.local";
import { NoteProps } from "@/app/types/global";
import { useState } from "react";
import Note from "./Note";

export default function Notes({ router, currPosition, search }: any) {
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [filtered, setFiltered] = useState<NoteProps[]>([]);

  getNotesFromLocalStorage(setNotes);

  function currentNotesView(currPosition: string) {
    if (currPosition === "grid") {
      return "grid grid-cols-2 gap-2";
    }

    if (currPosition === "search") {
      return "grid grid-cols-1 gap-4";
    }
  }

  filteredNotes(search, setFiltered, notes);

  const displayNotes = currPosition === "search" ? filtered : notes;

  return (
    <main className={`px-1 ${currPosition === "search" ? "pb-40" : ""}`}>
      <section className={currentNotesView(currPosition)}>
        {displayNotes.map((e) => (
          <Note
            key={e.id}
            id={e.id}
            title={e.title}
            date={e.date}
            time={e.time}
            notes={e.notes}
            router={router}
            setNotes={setNotes}
            currPosition={currPosition}
          />
        ))}
      </section>

      <p className="text-white/85 text-sm text-center mt-3">
        Added notes will be appear here...
      </p>
    </main>
  );
}
