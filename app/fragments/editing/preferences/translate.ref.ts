export function translateSize(currTextSize: string) {
  if (currTextSize === "small") return "text-sm";
  if (currTextSize === "medium") return "text-md";
  if (currTextSize === "big") return "text-lg";

  return "text-sm";
}

export function translateColor(currTextColor: string) {
  if (currTextColor === "default") return "text-white";

  if (currTextColor === "red") return "text-red-400";

  if (currTextColor === "blue") return "text-blue-400";

  if (currTextColor === "green") return "text-green-400";
}
