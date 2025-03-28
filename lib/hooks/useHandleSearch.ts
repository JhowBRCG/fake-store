import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function useHandleSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSubmitSearchQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;

    const params = new URLSearchParams(searchParams.toString());

    params.delete("page");
    params.set("q", searchQuery.toString());

    router.push(`/?${params}`);

    setSearchQuery("");
  };

  return { searchQuery, setSearchQuery, handleSubmitSearchQuery };
}
