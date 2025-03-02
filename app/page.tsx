import Select from "@/components/UI/Select";
import Products from "@/components/Sections/Products";

export default function Home() {
  return (
    <main className="mt-[75px] px-[10px] py-[20px]">
      <div className="flex items-center gap-2">
        <Select />
        <Select />
        <Select />
      </div>
      <Products />
    </main>
  );
}
