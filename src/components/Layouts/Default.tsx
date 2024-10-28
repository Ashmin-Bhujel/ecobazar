import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function Default({ children }: { children?: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
