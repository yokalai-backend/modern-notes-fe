import editNotesLocalStorage from "@/app/fragments/editing/edit.notes.local";

export default function NotesSearch({
  setDeleteNote,
  router,
  formatted,
  title,
  date,
}: {
  setDeleteNote: (con: boolean) => any;
  router: any;
  formatted: any;
  title: string;
  date: string;
}) {
  return (
    <div className="relative gap-5 flex flex-col justify-between text-white/90 bg-black/40  mt-1 py-4 px-2 items-center rounded-xl border-b-2 border-white/50">
      <div
        onClick={() => editNotesLocalStorage(router, formatted)}
        className="absolute bg-black min-w-full left-0 h-30 opacity-0 top-0"
      >
        Touch area
      </div>
      <div className="border-b border-b-white/30 min-h-30 w-full">
        <h2 className="line-clamp-1 text-lg max-w-40 sm:max-w-50">{title}</h2>
        <p className="text-white/60 line-clamp-4">{formatted.notes}</p>
      </div>

      <div className="flex gap-2 items-center mr-2.5 justify-between w-full px-1">
        <div className="text-sm">
          <p>{date}</p>
          <p>{formatted.time}</p>
        </div>
        <div onClick={() => setDeleteNote(true)} className="w-5.5 mb-0.5">
          <img src="/delete.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
