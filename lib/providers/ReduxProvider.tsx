"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";

type StoreProviderProps = {
  children: React.ReactNode;
};

export default function ReduxProvider({ children }: StoreProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
