export default function AddNotes({ router }: any) {
  return (
    <main>
      <button
        onClick={() => {
          localStorage.removeItem("editedId");
          router.push("/editing");
        }}
        className="fixed bottom-20 right-3 text-3xl text-black/60 bg-white px-5 py-2.5 rounded-full active:opacity-70 active:scale-90 transition duration-300"
      >
        +
      </button>
    </main>
  );
}
