import { NoteProps } from "@/app/types/global";
import { useEffect } from "react";

export default function filteredNotes(
  search: any,
  setFiltered: (filtered: NoteProps[]) => any,
  notes: NoteProps[],
) {
  return useEffect(() => {
    if (!search?.value) {
      setFiltered(notes);
      return;
    }
    const result = notes.filter(
      (e) =>
        e.title
          .slice(0, 10)
          .toLowerCase()
          .includes(search.value.toLowerCase()) ||
        e.notes.slice(0, 20).toLowerCase().includes(search.value.toLowerCase()),
    );
    setFiltered(result);
  }, [search?.value, notes]);
}
