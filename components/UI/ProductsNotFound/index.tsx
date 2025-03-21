import { cn } from "@/lib/utils/cn";

export default function ProductsNotFound({ className }: { className: string }) {
  return (
    <div
      className={`rounded-md border bg-neutral-100 shadow-md ${cn(className)}`}
    >
      <p className="text-center text-lg text-neutral-400">
        NO PRODUCTS FOUND :/
      </p>
    </div>
  );
}
