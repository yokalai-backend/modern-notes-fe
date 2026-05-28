import getNotesFromLocalStorage from "@/app/fragments/menu/get.notes.local";
import { NoteProps } from "@/app/types/global";
import { CurrentPositionProps } from "@/app/types/menu";
import Note from "./Note";

export default function Notes({
  router,
  currPosition,
  notes,
  setNotes,
  filtered,
}: {
  router: any;
  currPosition: CurrentPositionProps | undefined;
  notes: NoteProps[];
  setNotes: (nts: NoteProps[]) => any;
  filtered: NoteProps[];
}) {
  getNotesFromLocalStorage(setNotes);

  function currentNotesView(currPosition: string) {
    if (currPosition === "grid") {
      return "grid grid-cols-2";
    }

    if (currPosition === "search") {
      return "grid grid-cols-1 gap-4";
    }
  }

  const displayNotes = currPosition === "search" ? filtered : notes;

  return (
    <main>
      <section className={currentNotesView(currPosition!)}>
        {displayNotes.map((e) => (
          <Note
            key={e.id}
            id={e.id}
            title={e.title}
            date={e.date}
            time={e.time}
            notes={e.notes}
            createdAt={e.createdAt}
            router={router}
            setNotes={setNotes}
            currPosition={currPosition!}
          />
        ))}
      </section>

      <p className="text-white/85 text-sm text-center mt-3">
        Added notes will be appear here...
      </p>
    </main>
  );
}
