export default function TextSize({
  setCurrTextSize,
  autoSetStyle,
}: {
  setCurrTextSize: (size: string) => any;
  autoSetStyle: (size: string) => any;
}) {
  return (
    <div className="px-2 flex flex-col gap-2">
      <p className="text-sm text-center">Editor text size</p>

      <div className="text-sm flex flex-col gap-1.5">
        <button
          onClick={() => setCurrTextSize("small")}
          className={autoSetStyle("small")}
        >
          Small
        </button>
        <button
          onClick={() => setCurrTextSize("medium")}
          className={autoSetStyle("medium")}
        >
          Medium
        </button>
        <button
          onClick={() => setCurrTextSize("big")}
          className={autoSetStyle("big")}
        >
          Big
        </button>
      </div>
    </div>
  );
}
