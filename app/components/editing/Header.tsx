export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2.5 border-b border-b-white/40 rounded-lg border-l-3 border-l-white/40 gap-3">
      <div className="flex flex-col gap-0.5 flex-1">
        <input
          type="text"
          className="bg-transparent border-none outline-none text-[15px] font-mono font-medium text-white placeholder:text-[#bbb] caret-gray-500 w-full"
          placeholder="Untitled..."
        />
        <span className="text-[10px] font-mono text-[#aaa] uppercase tracking-widest">
          editing mode
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-7">
          <img src="/checkmark.svg" alt="" />
        </div>

        <div className="w-px h-6 bg-white mx-1" />

        <div className="w-6">
          <img src="/three.dots.svg" alt="" />
        </div>
      </div>
    </header>
  );
}
