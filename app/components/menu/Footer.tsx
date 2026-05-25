export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-4.5 fixed bottom-0 min-w-screen bg-black/20 py-2 border-t border-t-white/60 select-none">
      <div className="w-9">
        <img src="/notes.svg" alt="" />
      </div>

      <div className="w-9">
        <img src="/grid.svg" alt="" />
      </div>

      <div className="w-9">
        <img src="/search.svg" alt="" />
      </div>

      <div className="w-9">
        <img src="/setting.svg" alt="" />
      </div>
    </footer>
  );
}
