"use client";

import EditingArea from "@/app/components/editing/EditingArea";
import Header from "@/app/components/editing/Header";
import EditMode from "@/app/fragments/editing/edit.mode";
import NotesTimestamp from "@/app/fragments/editing/notes.timestamp";
import useInput from "@/app/hooks/useInput";

import { useRef, useState } from "react";

export default function Page() {
  const [text, setText] = useState("");
  const title = useInput();
  const lastCommit = useRef<{ date: string; time: string }>(null);
  const date = useRef(new Date());
  const [isPref, setIsPref] = useState(false);

  EditMode(lastCommit, title, setText);

  const { formatted, time } = NotesTimestamp(date);

  return (
    <main className="bg-black/75 min-h-screen flex flex-col gap-2">
      <Header
        title={title}
        text={text}
        date={formatted}
        time={time}
        setIsPref={setIsPref}
      />
      <EditingArea
        text={text}
        setText={setText}
        formatted={formatted}
        time={time}
        lsdate={lastCommit.current?.date}
        lstime={lastCommit.current?.time}
        isPref={isPref}
        setIsPref={setIsPref}
      />
    </main>
  );
}
