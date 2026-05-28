export default function SearchNotes({ search, searchRef, setIsSearch }: any) {
  return (
    <main className="fixed bottom-0 w-full px-1 bg-linear-to-t from-black to-zinc-900 min-h-35 flex flex-col justify-end rounded-t-xl border-b border-b-white/30 mb-0.5 transition-transform duration-300 ease-in-out">
      <button className="text-white text-sm font-mono w-fit px-5 py-1 top-1 left-2 absolute rounded-lg border border-white/30">
        Clear
      </button>
      <button
        onClick={() => setIsSearch(false)}
        className="absolute text-white text-3xl top-0 right-3 cursor-pointer hover:opacity-70 transition-opacity"
      >
        ↓
      </button>

      <div className="mb-2">
        <p className="text-xs text-white/50 mb-1 px-1 font-mono">
          Search by title or content
        </p>
        <textarea
          ref={searchRef}
          rows={2}
          className="bg-zinc-800 text-white/90 w-full rounded-2xl px-4 py-2.5 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-white/20 resize-none placeholder:text-white/30"
          placeholder="Search..."
          onChange={search.onChange}
          value={search.value}
        />
      </div>
    </main>
  );
}
