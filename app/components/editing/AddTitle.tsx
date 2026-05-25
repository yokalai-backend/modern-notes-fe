export default function AddTitle({ title, setNoTitle, handleAddNote }: any) {
  return (
    <main className="fixed inset-0 flex items-center justify-center backdrop-blur-xs px-10">
      <div className="bg-black/50 border border-white/10 w-full rounded-xl flex flex-col p-4 gap-4">
        <div className="flex items-center justify-between border-b border-b-white/20">
          <p className="text-white font-mono text-sm font-medium">New Note</p>
          <button
            onClick={() => setNoTitle(false)}
            className="text-white/40 hover:text-white font-mono text-xs transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white/40 font-mono text-xs uppercase tracking-widest">
            Title
          </label>
          <input
            type="text"
            className="text-white placeholder:text-white/20 font-mono text-sm bg-white/5 border border-white/10 rounded-lg outline-none px-3 py-2"
            onChange={title.onChange}
            value={title.value}
            placeholder="Untitled..."
          />
        </div>

        <div className="border-t border-white/10" />

        <div className="flex gap-2 justify-end">
          <button
            onClick={() => setNoTitle(false)}
            className="font-mono text-xs text-white/40 hover:text-white px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleAddNote}
            className="font-mono text-xs text-black bg-white hover:bg-white/80 px-4 py-2 rounded-lg transition-colors disabled:opacity-30"
          >
            Confirm
          </button>
        </div>
      </div>
    </main>
  );
}
