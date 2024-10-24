import { ReactNode } from "react";
import Header from "../Header";

export default function Default({ children }: { children?: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
