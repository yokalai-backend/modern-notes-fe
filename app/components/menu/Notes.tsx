import { useEffect, useState } from "react";
import { NoteProps } from "@/app/types/global";
import Note from "./Note";
import getNotesFromLocalStorage from "@/app/fragments/menu/get.notes.local";

export default function Notes() {
  const [notes, setNotes] = useState<NoteProps[]>([]);

  getNotesFromLocalStorage(setNotes);

  if (!notes.length) return;

  return (
    <main className="px-1">
      {!notes.length && (
        <p className="text-white/85 text-sm text-center">
          Add notes to keep here...
        </p>
      )}

      {notes.map((e) => (
        <Note key={e.id} title={e.title} date={e.date} />
      ))}
    </main>
  );
}
