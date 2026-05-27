export default function resetPreferences(
  sizeState: (size: string) => any,
  colorState: (color: string) => any,
) {
  localStorage.removeItem("editorTextSize");
  localStorage.removeItem("editorTextColor");

  sizeState("medium");
  colorState("default");
}
