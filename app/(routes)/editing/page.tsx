"use client";

import EditingArea from "@/app/components/editing/EditingArea";
import Header from "@/app/components/editing/Header";

import { useState, useRef } from "react";

export default function Page() {
  const [text, setText] = useState("");
  const date = useRef(new Date());

  const formatted = date.current.toLocaleDateString("en-US", {
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
      <Header text={text} formatted={formatted} time={time} />
      <EditingArea
        text={text}
        setText={setText}
        formatted={formatted}
        time={time}
      />
    </main>
  );
}
