export function autoSetColor(input: string, currColor: string) {
  if (currColor !== input) return "border rounded-2xl py-0.5 transition";

  if (currColor === "default") {
    return "border rounded-2xl py-0.5 transition bg-white/50";
  }

  if (currColor === "red") {
    return "border rounded-2xl py-0.5 transition bg-red-500";
  }

  if (currColor === "green") {
    return "border rounded-2xl py-0.5 transition bg-green-500";
  }

  if (currColor === "blue") {
    return "border rounded-2xl py-0.5 transition bg-blue-500";
  }
}
