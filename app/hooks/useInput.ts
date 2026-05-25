import { useState } from "react";

export default function useInput() {
  const [value, setValue] = useState("");

  const onChange = (e: any) => setValue(e.target.value);
  const reset = () => setValue("");

  return { value, onChange, reset };
}
