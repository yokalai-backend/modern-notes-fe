import { NoteProps } from "@/app/types/global";
import { SortingBy } from "@/app/types/menu";
import { Dispatch, SetStateAction, useEffect } from "react";

export default function sortedBySpecificFilter(
  sortedBy: SortingBy,
  setNotes: Dispatch<SetStateAction<NoteProps[]>>,
) {
  return useEffect(() => {
    if (sortedBy === "last created at") {
      setNotes((p: NoteProps[]) =>
        [...p].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        ),
      );
    }

    if (sortedBy === "last modified") {
      function timeToMinutes(time: string) {
        const [timePart, period] = time.split(" ");
        let [hours, minutes] = timePart.split(":").map(Number);

        if (period === "AM" && hours === 12) hours = 0;
        if (period === "PM" && hours !== 12) hours += 12;

        return hours * 60 + minutes;
      }

      setNotes((p: NoteProps[]) =>
        [...p].sort(
          (a, b) => timeToMinutes(b.time) - timeToMinutes(a.time), // fix ini
        ),
      );
    }

    if (sortedBy === "longest") {
      setNotes((p: NoteProps[]) =>
        [...p].sort((a, b) => b.notes.length - a.notes.length),
      );
    }

    if (sortedBy === "shortest") {
      setNotes((p: NoteProps[]) =>
        [...p].sort((a, b) => a.notes.length - b.notes.length),
      );
    }

    if (sortedBy === "alphabetically") {
      setNotes((p: NoteProps[]) =>
        [...p].sort((a, b) => a.title.localeCompare(b.title)),
      );
    }
  }, [sortedBy]);
}
