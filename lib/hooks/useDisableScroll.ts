import { useEffect } from "react";

export function useDisableScroll(isDisabled: boolean) {
  useEffect(() => {
    if (isDisabled) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, [isDisabled]);
}
