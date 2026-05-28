import sortedBySpecificFilter from "@/app/fragments/menu/sorted.by";
import { NoteProps } from "@/app/types/global";
import { SortingBy } from "@/app/types/menu";
import { Dispatch, SetStateAction, useState } from "react";
import SortMenu from "./SortMenu";

export default function Filter({
  sortedBy,
  setSortedBy,
  setNotes,
}: {
  sortedBy: SortingBy;
  setSortedBy: (con: SortingBy) => any;
  setNotes: Dispatch<SetStateAction<NoteProps[]>>;
}) {
  const [isSort, setIsSort] = useState(false);

  sortedBySpecificFilter(sortedBy, setNotes);

  return (
    <main>
      <div
        onClick={() => setIsSort((p: any) => !p)}
        className="fixed w-full bg-black text-white px-2 py-1.5 rounded-2xl opacity-0"
      >
        Touch area
      </div>
      <h3 className="text-center text-white text-sm font-semibold border border-white/40 rounded-lg mt-1 py-2 shadow-lg select-none">
        Sorting by <span className="text-white/80">{sortedBy}</span>
      </h3>
      {isSort && <SortMenu sortedBy={sortedBy} setSortedBy={setSortedBy} />}
    </main>
  );
}
