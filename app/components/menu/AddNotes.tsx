import { useRouter } from "next/router";

export default function AddNotes({ router }: any) {
  return (
    <main>
      <button
        onClick={() => router.push("/editing")}
        className="fixed bottom-16 right-3 text-3xl text-black/60 bg-white px-5 py-2.5 rounded-full"
      >
        +
      </button>
    </main>
  );
}
