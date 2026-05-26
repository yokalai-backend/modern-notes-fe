import { useEffect, useState } from "react";
import { NoteProps } from "@/app/types/global";
import Note from "./Note";
import getNotesFromLocalStorage from "@/app/fragments/menu/get.notes.local";

export default function Notes({ router }: any) {
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
        <Note
          key={e.id}
          id={e.id}
          title={e.title}
          date={e.date}
          time={e.time}
          notes={e.notes}
          router={router}
        />
      ))}
    </main>
  );
}
