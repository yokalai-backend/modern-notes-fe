export default function EditingArea({
  text,
  setText,
  formatted,
  time,
  lsdate,
  lstime,
}: any) {
  return (
    <div className="flex flex-col h-screen overflow-hidden border-2 border-white/30 rounded-lg">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/30">
        <div>
          <h2 className="text-white font-mono">Modern Note</h2>

          {lsdate && (
            <div className="text-xs font-mono text-white flex flex-col gap-1">
              <p>Last updated</p>
              <div className="flex gap-2">
                <p>{lsdate}</p> |<p>{lstime}</p>
              </div>
            </div>
          )}
        </div>
        <div className="text-white text-xs font-mono">
          <p>{formatted}</p>
          <p className="text-right">{time}</p>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <textarea
          className="flex-1 px-5 py-4 font-mono text-sm leading-6 text-white bg-transparent resize-none outline-none placeholder:text-white/30"
          placeholder="Start typing..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
    </div>
  );
}
