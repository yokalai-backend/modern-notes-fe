export default function OpenSearchBar({
  setIsSearch,
}: {
  setIsSearch: (con: boolean) => any;
}) {
  return (
    <main className="fixed bottom-15 w-full px-1 bg-linear-to-t from-black to-zinc-900 min-h-10 flex flex-col justify-end rounded-t-xl border-b border-b-white/30 mb-0.5">
      <p className="text-white font-mono absolute top-1 left-3">Search...</p>
      <button
        onClick={() => setIsSearch(true)}
        className="absolute text-white text-3xl top-0 right-3 cursor-pointer hover:opacity-70 transition-opacity"
      >
        ↑
      </button>
    </main>
  );
}
