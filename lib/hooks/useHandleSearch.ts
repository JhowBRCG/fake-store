import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export function useHandleSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const handleSubmitSearchQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("q", searchQuery.toString());

    if (pathName.startsWith("/category")) {
      router.push(`/?${params.toString()}`);
    } else router.push(`?${params.toString}`);

    setSearchQuery("");
  };

  return { searchQuery, setSearchQuery, handleSubmitSearchQuery };
}
