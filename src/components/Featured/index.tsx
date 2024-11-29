import AllProducts from "./AllProducts";
import Products from "./Products";

export default function Featured() {
  return (
    <section className="container mx-auto pt-24 mb-24">
      <Products />
      <AllProducts />
    </section>
  );
}
