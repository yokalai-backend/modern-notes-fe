import editNotesLocalStorage from "@/app/fragments/editing/edit.notes.local";

export default function NotesList({
  setDeleteNote,
  router,
  formatted,
  title,
  date,
}: {
  setDeleteNote: (con: boolean) => any;
  setNotes: () => any;
  router: any;
  formatted: any;
  title: string;
  date: string;
}) {
  return (
    <div className="relative flex justify-between text-white/90 text-lg bg-black/40  mt-1 py-4 px-2 items-center rounded-xl border-b-2 border-white/50">
      <div
        onClick={() => editNotesLocalStorage(router, formatted)}
        className="absolute bg-black min-w-70 left-0 h-full opacity-0"
      >
        Touch area
      </div>

      <h2 className="line-clamp-1 min-w-50 text-sm">{title}</h2>
      <div className="flex gap-2 items-center mr-2.5">
        <p className="text-sm">{date}</p>
        <div onClick={() => setDeleteNote(true)} className="w-5.5 mb-0.5">
          <img src="/delete.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
