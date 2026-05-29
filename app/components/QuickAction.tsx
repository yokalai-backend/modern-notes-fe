import { useState } from "react";
import { NoteProps } from "../types/global";
import DoubleConfirmation from "../fragments/global/DoubleConfirmation";
import { toast } from "sonner";

export default function QuickAction({
  isQuickAction,
  setIsQuickAction,
  setNotes,
}: {
  isQuickAction: boolean;
  setIsQuickAction: (con: boolean) => any;
  setNotes: (nts: NoteProps[]) => any;
}) {
  const [deleteAllNotes, setDeleteAllNotes] = useState(false);
  const buttons = [
    "Delete all notes",
    "Sync Account",
    "Rate Project",
    "Credits",
    "Report bugs",
  ] as const;

  type QuickActionButtons = (typeof buttons)[number];

  function buttonsEmmited(input: QuickActionButtons) {
    if (input === "Delete all notes") {
      setDeleteAllNotes(true);
    }

    if (input === "Rate Project") {
      const isLogin = localStorage.getItem("isLogin");

      if (isLogin === "false" || !isLogin) {
        return toast.error("Please login first");
      }
    }

    if (input === "Report bugs") {
      const isLogin = localStorage.getItem("isLogin");

      if (isLogin === "false" || !isLogin) {
        return toast.error("Please login first");
      }
    }
  }

  function deleteAllNotesFromLocalStorage() {
    const currentNotes = JSON.parse(
      localStorage.getItem("mynotes")!,
    ) as NoteProps[];

    if (!currentNotes || !currentNotes.length) {
      return toast.error("There's no notes can be found");
    }

    setNotes([]);
    localStorage.removeItem("mynotes");
    setDeleteAllNotes(false);
  }

  return (
    <div className="inset-0 fixed z-10 top-2">
      <main className="relative text-white font-mono justify-self-end bg-mist-800 min-h-60 w-55 rounded-lg py-2 flex flex-col gap-3 border-b-2 border-b-white/30">
        <DoubleConfirmation
          trigger={deleteAllNotes}
          setTrigger={setDeleteAllNotes}
          text="You sure you want to delete all of your notes ?"
          callback={deleteAllNotesFromLocalStorage}
        />
        <button
          onClick={() => setIsQuickAction(false)}
          className="text-lg absolute right-3 top-1"
        >
          X
        </button>

        <h3 className="text-lg text-center border-b border-white/30 py-1">
          Quick Action
        </h3>

        <div className="flex flex-col gap-2.5 px-3">
          {buttons.map((e, i) => (
            <button
              onClick={() => buttonsEmmited(e)}
              key={i}
              className="bg-blue-900 rounded-2xl py-1 active:scale-90 transition duration-300 active:opacity-90"
            >
              {e}
            </button>
          ))}
        </div>

        <footer className="px-2"></footer>
      </main>
    </div>
  );
}
