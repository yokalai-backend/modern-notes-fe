import editNotesLocalStorage from "@/app/fragments/editing/edit.notes.local";
import DoubleConfirmation from "@/app/fragments/global/DoubleConfirmation";
import deleteNoteFromLocalStorage from "@/app/fragments/menu/delete.note.local";
import { NoteProps } from "@/app/types/global";
import { useState } from "react";
import NotesList from "./NotesList";
import NotesGrid from "./NotesGrid";

export default function Note({
  id,
  title,
  date,
  time,
  notes,
  router,
  setNotes,
  currPosition,
}: {
  id: string;
  title: string;
  date: string;
  time: string;
  notes: string;
  router: any;
  setNotes: any;
  currPosition: string;
}) {
  const [deleteNote, setDeleteNote] = useState(false);

  const formatted = {
    id,
    notes,
    time,
    title,
    date,
  };

  if (currPosition === "notes") {
    return (
      <div>
        <NotesList
          date={date}
          formatted={formatted}
          router={router}
          setNotes={setNotes}
          title={title}
          setDeleteNote={setDeleteNote}
        />

        <DoubleConfirmation
          trigger={deleteNote}
          setTrigger={setDeleteNote}
          text="Are you sure you want delete this note ?"
          callback={() =>
            deleteNoteFromLocalStorage(id, setDeleteNote, setNotes)
          }
        />
      </div>
    );
  }

  return (
    <div>
      <NotesGrid
        date={date}
        formatted={formatted}
        router={router}
        setDeleteNote={setDeleteNote}
        setNotes={setNotes}
        title={title}
      />

      <DoubleConfirmation
        trigger={deleteNote}
        setTrigger={setDeleteNote}
        text="Are you sure you want delete this note ?"
        callback={() => deleteNoteFromLocalStorage(id, setDeleteNote, setNotes)}
      />
    </div>
  );
}
