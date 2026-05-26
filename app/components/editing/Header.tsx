import addNotesToLocalStorage from "@/app/fragments/editing/add.notes.local";
import useInput from "@/app/hooks/useInput";
import AddTitle from "./AddTitle";
import { useState } from "react";
import { toast } from "sonner";
import GoBack from "@/app/fragments/global/GoBack";

export default function Header({ text, formatted, time }: any) {
  const title = useInput();
  const [noTitle, setNoTitle] = useState(false);

  function handleAddNote() {
    if (!title.value) {
      setNoTitle(true);

      toast.error("Title empty, add title to continue");
      return;
    }

    addNotesToLocalStorage(text, title.value, formatted, time);
  }

  return (
    <header className="flex items-center justify-between px-4 py-2.5 border-b border-b-white/40 rounded-lg border-l-3 border-l-white/40 gap-3">
      <GoBack />

      {noTitle && (
        <AddTitle
          title={title}
          setNoTitle={setNoTitle}
          handleAddNote={handleAddNote}
        />
      )}
      <div className="flex flex-col gap-0.5 flex-1">
        <input
          type="text"
          className="bg-transparent border-none outline-none text-[15px] font-mono font-medium text-white placeholder:text-[#bbb] caret-gray-500 w-full"
          placeholder="Untitled..."
          onChange={title.onChange}
          value={title.value}
        />
        <span className="text-[10px] font-mono text-[#aaa] uppercase tracking-widest">
          editing mode
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div onClick={handleAddNote} className="w-5.5">
          <img src="/checkmark.svg" alt="" />
        </div>

        <div className="w-px h-6 bg-white mx-1" />

        <div className="w-5">
          <img src="/three.dots.svg" alt="" />
        </div>
      </div>
    </header>
  );
}
