import { useState } from "react";
import QuickAction from "../QuickAction";
import { NoteProps } from "@/app/types/global";

export default function Header({
  setNotes,
}: {
  setNotes: (nts: NoteProps[]) => any;
}) {
  const [isQuickAction, setIsQuickAction] = useState(false);
  return (
    <header className="flex items-center justify-between py-3 px-2 border-b border-b-white/70">
      <div className="flex flex-col">
        <h1 className="text-2xl leading-none">
          <span className="text-white/70">Modern</span>{" "}
          <span className="text-white">Note</span>
        </h1>
        <p className="text-white text-xs font-mono">
          Keep your notes private and save.
        </p>
      </div>

      <div
        onClick={() => setIsQuickAction(true)}
        className="w-5 self-start mt-0.5"
      >
        <img src="/three.dots.svg" alt="" />
      </div>

      {isQuickAction && (
        <QuickAction
          isQuickAction={isQuickAction}
          setIsQuickAction={setIsQuickAction}
          setNotes={setNotes}
        />
      )}
    </header>
  );
}
