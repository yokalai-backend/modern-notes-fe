import { useEffect } from "react";
import TextSize from "../editing/preferences/TextSize";
import TextColor from "../editing/preferences/TextColor";
import resetPreferences from "../editing/preferences/reset.pref";

const aciveStyle = "bg-mist-700 rounded-2xl py-0.5 transition";
const nonActiveStyle = "bg-black/60 rounded-2xl py-0.5 transition";

export default function Preferences({
  currTextSize,
  setCurrTextSize,
  setIsPref,
  currTextColor,
  setCurrTextColor,
}: {
  currTextSize: string;
  setCurrTextSize: (size: string) => any;
  setIsPref: (isPref: boolean) => any;
  currTextColor: string;
  setCurrTextColor: (color: string) => any;
}) {
  const autoSetStyle = (input: string) => {
    if (input === currTextSize) return aciveStyle;
    return nonActiveStyle;
  };

  useEffect(() => {
    localStorage.setItem("editorTextSize", currTextSize);

    localStorage.setItem("editorTextColor", currTextColor);
  }, [currTextSize, currTextColor]);

  return (
    <div className="inset-0 fixed">
      <main className="relative text-white font-mono justify-self-end bg-zinc-800 min-h-80 w-50 rounded-lg py-2 flex flex-col gap-3 border-b-2 border-b-white/50">
        <button
          onClick={() => setIsPref(false)}
          className="text-lg absolute right-3 top-1"
        >
          X
        </button>

        <h3 className="text-lg text-center border-b border-white/30 py-1">
          Preferences
        </h3>

        <TextSize
          autoSetStyle={autoSetStyle}
          setCurrTextSize={setCurrTextSize}
        />

        <TextColor currColor={currTextColor} setCurrColor={setCurrTextColor} />

        <footer className="px-2">
          <button
            onClick={() => resetPreferences(setCurrTextSize, setCurrTextColor)}
            className="bg-black/50 py-0.5 rounded-2xl w-full"
          >
            Reset
          </button>
        </footer>
      </main>
    </div>
  );
}
