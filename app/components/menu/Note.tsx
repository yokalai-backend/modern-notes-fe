import editNotesLocalStorage from "@/app/fragments/editing/edit.notes.local";
import DoubleConfirmation from "@/app/fragments/global/DoubleConfirmation";
import { NoteProps } from "@/app/types/global";
import { useState } from "react";

export default function Note({
  id,
  title,
  date,
  time,
  notes,
  router,
  setNotes,
}: {
  id: string;
  title: string;
  date: string;
  time: string;
  notes: string;
  router: any;
  setNotes: any;
}) {
  const [deleteNote, setDeleteNote] = useState(false);

  const formatted = {
    id,
    notes,
    time,
    title,
    date,
  };

  function deleteNoteFromLocalStorage() {
    const myNotes = JSON.parse(localStorage.getItem("mynotes")!) as NoteProps[];

    const deletedNotes = myNotes.filter((e) => e.id !== id);

    localStorage.setItem("mynotes", JSON.stringify(deletedNotes));

    setDeleteNote(false);
    setNotes(deletedNotes);
  }

  return (
    <div className="relative flex justify-between text-white/90 text-lg bg-black/40  mt-1 py-4 px-2 items-center rounded-xl border-b-2 border-white/50">
      <div
        onClick={() => editNotesLocalStorage(router, formatted)}
        className="absolute bg-black min-w-70 left-0 h-full opacity-0"
      >
        Touch area
      </div>
      <DoubleConfirmation
        trigger={deleteNote}
        setTrigger={setDeleteNote}
        text="Are you sure you want delete this notes ?"
        callback={deleteNoteFromLocalStorage}
      />
      <h2 className="line-clamp-1 min-w-50 text-sm">{title}</h2>
      <div className="flex gap-2 items-center mr-2.5">
        <p className="text-sm">{date}</p>
        <div onClick={() => setDeleteNote(true)} className="w-5.5 mb-0.5">
          <img src="/delete.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
