import { NoteProps } from "@/app/types/global";

export default function deleteNoteFromLocalStorage(
  id: string,
  setDeleteNote: (con: boolean) => any,
  setNotes: (deleted: NoteProps[]) => any,
) {
  const myNotes = JSON.parse(localStorage.getItem("mynotes")!) as NoteProps[];

  const deletedNotes = myNotes.filter((e) => e.id !== id);

  localStorage.setItem("mynotes", JSON.stringify(deletedNotes));

  setDeleteNote(false);
  setNotes(deletedNotes);
}
