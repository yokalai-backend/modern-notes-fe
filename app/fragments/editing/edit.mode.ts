import { useEffect } from "react";
import { NoteProps } from "@/app/types/global";

export default function EditMode(lastCommit: any, title: any, setText: any) {
  return useEffect(() => {
    const editedNotes = localStorage.getItem("editedNotes");

    if (!editedNotes) return;

    const parsed = JSON.parse(editedNotes) as NoteProps;

    lastCommit.current = {
      time: parsed.time,
      date: parsed.date,
      createdAt: parsed.createdAt,
    };

    localStorage.setItem("editedId", parsed.id);
    console.log(parsed);

    title.setValue(parsed.title);
    setText(parsed.notes);
  }, []);
}
