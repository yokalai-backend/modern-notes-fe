import DoubleConfirmation from "@/app/fragments/global/DoubleConfirmation";
import deleteNoteFromLocalStorage from "@/app/fragments/menu/delete.note.local";
import { useState } from "react";
import NotesGrid from "./view/NotesGrid";
import NotesList from "./view/NotesList";
import NotesSearch from "./view/NotesSearch";

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
  } else if (currPosition === "grid")
    return (
      <div>
        <NotesGrid
          date={date}
          formatted={formatted}
          router={router}
          setDeleteNote={setDeleteNote}
          title={title}
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
  else if (currPosition === "search") {
    return (
      <div className="relative">
        <NotesSearch
          date={date}
          formatted={formatted}
          router={router}
          setDeleteNote={setDeleteNote}
          title={title}
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
}
