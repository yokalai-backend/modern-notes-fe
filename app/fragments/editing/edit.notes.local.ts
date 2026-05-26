import { NoteProps } from "@/app/types/global";
import { toast } from "sonner";

export default function editNotesLocalStorage(
  router: any,
  formatted: NoteProps,
) {
  if (!formatted.id) return toast.error("Notes id invalid");

  localStorage.setItem("editedNotes", JSON.stringify(formatted));

  router.push("/editing");
}
