"use client";

import EditingArea from "@/app/components/editing/EditingArea";
import Header from "@/app/components/editing/Header";
import useInput from "@/app/hooks/useInput";
import { NoteProps } from "@/app/types/global";

import { useState, useRef, useEffect } from "react";

export default function Page() {
  const [text, setText] = useState("");
  const title = useInput();
  const lastCommit = useRef<{ date: string; time: string }>(null);
  const date = useRef(new Date());

  useEffect(() => {
    const editedNotes = localStorage.getItem("editedNotes");

    if (!editedNotes) return;

    const parsed = JSON.parse(editedNotes) as NoteProps;

    lastCommit.current = { time: parsed.time, date: parsed.date };
    localStorage.setItem("editedId", parsed.id);

    title.setValue(parsed.title);
    setText(parsed.notes);
  }, []);

  const formatted = date.current.toLocaleDateString("en-GB", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const time = date.current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <main className="bg-black/75 min-h-screen flex flex-col gap-2">
      <Header title={title} text={text} date={formatted} time={time} />
      <EditingArea
        text={text}
        setText={setText}
        formatted={formatted}
        time={time}
        lsdate={lastCommit.current?.date}
        lstime={lastCommit.current?.time}
      />
    </main>
  );
}
