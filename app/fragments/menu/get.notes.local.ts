import { useEffect } from "react";
import { NoteProps } from "@/app/types/global";

export default function getNotesFromLocalStorage(
  setNotes: (notes: NoteProps[]) => any,
) {
  return useEffect(() => {
    const myNotes = localStorage.getItem("mynotes");

    if (!myNotes) return;

    const parsed = JSON.parse(myNotes) as NoteProps[];

    setNotes(parsed);
  }, []);
}
