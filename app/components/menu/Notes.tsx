export default function Notes() {
  return (
    <main className="px-1">
      <main className="flex justify-between text-white/90 text-lg bg-linear-to-r from-white/40 to-white/20 mt-1 py-4 px-2 items-center rounded-xl border-b border-b-white">
        <h2 className="line-clamp-1 max-w-55">
          I love coding and computer science
        </h2>
        <div className="flex gap-2 items-center mr-2.5">
          <p className="text-sm">2 May 2026</p>
          <div className="w-5.5 mb-0.5">
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      </main>
    </main>
  );
}
