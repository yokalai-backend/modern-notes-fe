export default function Note({ title, date }: { title: string; date: string }) {
  return (
    <div className="flex justify-between text-white/90 text-lg bg-black/40  mt-1 py-4 px-2 items-center rounded-xl border-b-2 border-white/50">
      <h2 className="line-clamp-1 max-w-50 text-sm">{title}</h2>
      <div className="flex gap-2 items-center mr-2.5">
        <p className="text-sm">{date}</p>
        <div className="w-5.5 mb-0.5">
          <img src="/delete.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
