export default function DoubleConfirmation({
  trigger,
  setTrigger,
  text,
  callback,
}: {
  trigger: boolean;
  setTrigger: (t: boolean) => any;
  text?: string;
  callback: () => any;
}) {
  if (!trigger) return;

  return (
    <main className="inset-0 fixed flex items-center justify-center backdrop-blur-sm z-10">
      <div className="relative max-w-70 bg-black/40 flex flex-col gap-10 rounded-lg px-5 py-5 border border-white/30 mb-10">
        <button
          onClick={() => setTrigger(false)}
          className="absolute text-white right-3 top-0.5 text-lg"
        >
          X
        </button>

        <div className=" border-b border-b-white/30 flex flex-col gap-1">
          <h2 className="text-white text-sm">
            {text ?? "Are you sure you want to proceed this action ?"}
          </h2>

          <p className="text-white/75 text-xs">This action cannot be rewind!</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setTrigger(false)}
            className="border w-full rounded-lg border-white/60 py-1.5 text-white/80"
          >
            Cancel
          </button>
          <button
            onClick={callback}
            className="bg-black/60 w-full rounded-lg border border-white/30 py-1.5 text-white/80"
          >
            Proceed
          </button>
        </div>
      </div>
    </main>
  );
}
