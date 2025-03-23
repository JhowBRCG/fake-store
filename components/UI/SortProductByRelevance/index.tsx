import { cn } from "@/lib/utils/cn";

export default function SortProductByPrice({
  className,
}: {
  className: string;
}) {
  return (
    <div className={`relative ${cn(className)}`}>
      <div className="flex w-full cursor-pointer items-center justify-between rounded-lg border-black bg-white px-2 py-[5px]">
        <p className="text-center text-xs">Relevance</p>
      </div>
    </div>
  );
}
