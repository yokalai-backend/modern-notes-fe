import { useState } from "react";

export default function useInput(initialVal?: string) {
  const [value, setValue] = useState(initialVal ?? "");

  const onChange = (e: any) => setValue(e.target.value);
  const reset = () => setValue("");

  return { value, onChange, reset, setValue };
}
