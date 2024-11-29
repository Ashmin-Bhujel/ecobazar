import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Default from "@/components/Layouts/Default";
import TopCategory from "@/components/TopCategory";

export default function Home() {
  return (
    <Default>
      <Hero />
      <Featured />
      <TopCategory />
    </Default>
  );
}
