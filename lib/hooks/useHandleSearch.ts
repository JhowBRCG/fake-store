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

    const newPath = pathName.startsWith("/category")
      ? `/?${params}`
      : `?${params}`;
    router.push(newPath);

    setSearchQuery("");
  };

  return { searchQuery, setSearchQuery, handleSubmitSearchQuery };
}
