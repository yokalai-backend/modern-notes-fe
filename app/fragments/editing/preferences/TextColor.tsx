import { autoSetColor } from "./auto.set.pref";

export default function TextColor({
  currColor,
  setCurrColor,
}: {
  currColor: string;
  setCurrColor: (color: string) => any;
}) {
  return (
    <main className="px-5 flex flex-col gap-2">
      <p className="text-sm text-center">Editor text color</p>

      <div className="text-sm flex flex-col gap-2">
        <button
          onClick={() => setCurrColor("default")}
          className={autoSetColor("default", currColor)}
        >
          Default
        </button>

        <button
          onClick={() => setCurrColor("red")}
          className={autoSetColor("red", currColor)}
        >
          Red
        </button>

        <button
          onClick={() => setCurrColor("green")}
          className={autoSetColor("green", currColor)}
        >
          Green
        </button>

        <button
          onClick={() => setCurrColor("blue")}
          className={autoSetColor("blue", currColor)}
        >
          Blue
        </button>
      </div>
    </main>
  );
}
