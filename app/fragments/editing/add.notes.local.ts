import { NoteProps } from "@/app/types/global";
import { toast } from "sonner";

export default function addNotesToLocalStorage(
  text: string,
  title: string,
  date: string,
  time: string,
) {
  if (!text) return toast.error("No notes could be added");

  const editedId = localStorage.getItem("editedId");

  const currentId =
    editedId || Math.random().toString(36).slice(2) + Date.now().toString(36);

  const formatted = {
    id: currentId,
    notes: text,
    title,
    date,
    time,
    createdAt: date,
  };

  const myNotes = localStorage.getItem("mynotes");

  if (!myNotes) {
    localStorage.setItem("mynotes", JSON.stringify([formatted]));
    localStorage.setItem("editedId", currentId);
    toast.success("New notes added into local storage");
    return;
  }

  const parsed = JSON.parse(myNotes) as NoteProps[];

  if (editedId) {
    const edit = parsed.map((e) =>
      e.id === editedId ? { ...formatted, createdAt: e.createdAt } : e,
    );
    localStorage.setItem("mynotes", JSON.stringify(edit));
    localStorage.setItem("editedId", editedId);
    toast.success("Current notes has been updated");
    return;
  }

  localStorage.setItem("mynotes", JSON.stringify([...parsed, formatted]));
  localStorage.setItem("editedId", currentId);
  toast.success("New notes added into local storage");
}
