"use client";

import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-xl text-white self-start mt-1 px-1"
    >
      ⟵
    </button>
  );
}
