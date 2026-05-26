import { NoteProps } from "@/app/types/global";
import { toast } from "sonner";

export default function addNotesToLocalStorage(
  text: string,
  title: string,
  date: string,
  time: string,
  isIdExists: string,
) {
  if (!text) return toast.error("No notes could be added");

  const currentId =
    Math.random().toString(36).slice(2) + Date.now().toString(36);

  const formatted = {
    id: currentId,
    notes: text,
    title,
    date,
    time,
  };

  const mynotes = localStorage.getItem("mynotes");

  if (!mynotes) {
    localStorage.setItem("mynotes", JSON.stringify([formatted]));

    return currentId;
  }

  const parsed = JSON.parse(mynotes) as NoteProps[];

  if (isIdExists) {
    const edit = parsed.map((e) => (e.id === isIdExists ? formatted : e));

    localStorage.setItem("mynotes", JSON.stringify(edit));

    toast.success("Current notes has been updated");

    return currentId;
  }

  localStorage.setItem("mynotes", JSON.stringify([...parsed, formatted]));

  toast.success("New notes added into local storage");

  return currentId;
}
