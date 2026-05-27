import {
  translateSize,
  translateColor,
} from "@/app/fragments/editing/preferences/translate.ref";
import Preferences from "@/app/fragments/global/Preferences";
import { useEffect, useState } from "react";

export default function EditingArea({
  text,
  setText,
  formatted,
  time,
  lsdate,
  lstime,
  isPref,
  setIsPref,
}: any) {
  const [currTextSize, setCurrTextSize] = useState("medium");
  const [currTextColor, setCurrTextColor] = useState("default");

  useEffect(() => {
    const lastEditorTextSize = localStorage.getItem("editorTextSize");
    const lastEditorTextColor = localStorage.getItem("editorTextColor");

    setCurrTextSize(lastEditorTextSize ?? "medium");
    setCurrTextColor(lastEditorTextColor ?? "default");
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden border-2 border-white/30 rounded-lg">
      {isPref && (
        <Preferences
          currTextSize={currTextSize}
          setCurrTextSize={setCurrTextSize}
          setIsPref={setIsPref}
          currTextColor={currTextColor}
          setCurrTextColor={setCurrTextColor}
        />
      )}

      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/30">
        <div>
          <h2 className="text-lg leading-none mb-1">
            <span className="text-white/70">Modern</span>{" "}
            <span className="text-white">Note</span>
          </h2>

          {lsdate && (
            <div className="text-xs font-mono text-white flex flex-col gap-1">
              <p>Last updated</p>
              <div className="flex gap-2">
                <p>{lsdate}</p> |<p>{lstime}</p>
              </div>
            </div>
          )}
        </div>
        <div className="text-white text-xs font-mono mt-1">
          <p>{formatted}</p>
          <p className="text-right">{time}</p>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <textarea
          className={`flex-1 px-5 py-4 font-mono ${translateSize(currTextSize)} leading-6 ${translateColor(currTextColor)} bg-transparent resize-none outline-none placeholder:text-white/30`}
          placeholder="Start typing..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
    </div>
  );
}
