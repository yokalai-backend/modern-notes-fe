import AddNotes from "@/app/components/menu/AddNotes";
import Filter from "@/app/components/menu/Filter";
import Footer from "@/app/components/menu/Footer";
import Header from "@/app/components/menu/Header";
import Notes from "@/app/components/menu/Notes";

export default function Page() {
  return (
    <main className="bg-black/75 min-h-screen">
      <Header />
      <Filter />
      <Notes />
      <AddNotes />
      <Footer />
    </main>
  );
}
