import { CurrentPositionProps } from "@/app/types/menu";

const navItems: { key: CurrentPositionProps; icon: string; alt: string }[] = [
  { key: "notes", icon: "/notes.svg", alt: "Notes" },
  { key: "grid", icon: "/grid.svg", alt: "Grid" },
  { key: "search", icon: "/search.svg", alt: "Search" },
  { key: "setting", icon: "/setting.svg", alt: "Setting" },
];

export default function Footer({
  currPosition,
  setCurrPosition,
}: {
  currPosition: CurrentPositionProps | undefined;
  setCurrPosition: (position: CurrentPositionProps) => any;
}) {
  return (
    <footer className="flex gap-2 items-center fixed bottom-0 w-full bg-zinc-800 py-2 px-1 border-t border-t-white/60 select-none">
      {navItems.map(({ key, icon, alt }) => (
        <div
          key={key}
          onClick={() => {
            setCurrPosition(key);
          }}
          className={`flex-1 flex items-center justify-center py-1.5 rounded-xl cursor-pointer transition-all duration-200 ${
            currPosition === key ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <img src={icon} alt={alt} className="w-9" />
        </div>
      ))}
    </footer>
  );
}
