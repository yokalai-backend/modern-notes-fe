import { toast } from "sonner";

export default function addNotesToLocalStorage(
  text: string,
  title: string,
  date: string,
  time: string,
) {
  if (!text) return toast.error("No notes could be added");

  const formatted = {
    id: Math.random().toString(36).slice(2) + Date.now().toString(36),
    notes: text,
    title,
    date,
    time,
  };

  const mynotes = localStorage.getItem("mynotes");

  if (!mynotes) {
    localStorage.setItem("mynotes", JSON.stringify([formatted]));
  } else {
    const parsed = JSON.parse(mynotes);
    localStorage.setItem("mynotes", JSON.stringify([...parsed, formatted]));
    toast.success("New notes added into local storage");
  }
}
