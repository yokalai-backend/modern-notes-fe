import { SortingBy } from "@/app/types/menu";

export default function SortMenu({
  sortedBy,
  setSortedBy,
}: {
  sortedBy: SortingBy;
  setSortedBy: (con: SortingBy) => any;
}) {
  const buttons = [
    "last created at",
    "last modified",
    "longest",
    "shortest",
    "alphabetically",
  ];

  function isSortingByMe(e: SortingBy) {
    if (sortedBy === e) {
      return "bg-blue-900 text-gray-200";
    }
    return "bg-gray-600/60";
  }

  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col gap-2 bg-linear-to-br from-zinc-700 to-gray-800 text-white w-full rounded-b-2xl items-center px-20 py-1">
        {buttons.map((e, i) => (
          <button
            onClick={() => setSortedBy(e as SortingBy)}
            key={i}
            className={`${isSortingByMe(e as SortingBy)} rounded-2xl py-2 w-full transition active:scale-90`}
          >
            {e}
          </button>
        ))}
      </div>
    </main>
  );
}
