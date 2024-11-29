import {
  greenApple,
  indianMalta,
  greenLettuce,
  eggplant,
  ladiesFinger,
  redTomatos,
  bigPotatos,
  corn,
  freshCauliflower,
  banner1,
} from "@/assets/images";
import { ProductPropType } from "./Products";
import SmallProduct from "./SmallProduct";
import Image from "next/image";

export interface AllProductsPropType extends ProductPropType {
  category: "Hot Deals" | "Best Sellers" | "Top Rated";
}

const smallProducts: AllProductsPropType[] = [
  {
    src: greenApple,
    alt: "Green Apple",
    name: "Green Apple",
    price: 14.99,
    rating: 4,
    category: "Hot Deals",
  },
  {
    src: indianMalta,
    alt: "Indian Malta",
    name: "Indian Malta",
    price: 14.99,
    rating: 4,
    category: "Hot Deals",
  },
  {
    src: greenLettuce,
    alt: "Green Lettuce",
    name: "Green Lettuce",
    price: 14.99,
    rating: 4,
    category: "Hot Deals",
  },
  {
    src: eggplant,
    alt: "Eggplant",
    name: "Eggplant",
    price: 14.99,
    rating: 4,
    category: "Best Sellers",
  },
  {
    src: ladiesFinger,
    alt: "Ladies Finger",
    name: "Ladies Finger",
    price: 14.99,
    rating: 4,
    category: "Best Sellers",
  },
  {
    src: redTomatos,
    alt: "Red Tomatos",
    name: "Red Tomatos",
    price: 14.99,
    rating: 4,
    category: "Best Sellers",
  },
  {
    src: bigPotatos,
    alt: "Big Potatos",
    name: "Big Potatos",
    price: 14.99,
    rating: 4,
    category: "Top Rated",
  },
  {
    src: corn,
    alt: "Corn",
    name: "Corn",
    price: 14.99,
    rating: 4,
    category: "Top Rated",
  },
  {
    src: freshCauliflower,
    alt: "Fresh Cauliflower",
    name: "Fresh Cauliflower",
    price: 14.99,
    rating: 4,
    category: "Top Rated",
  },
];

const categories: string[] = ["Hot Deals", "Best Sellers", "Top Rated"];

export function CategoriesBlock({ category }: { category: string }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-500 text-gray-900">{category}</h3>
      <div className="flex flex-col gap-4">
        {smallProducts.map(
          (smallProduct, index) =>
            smallProduct.category === category && (
              <SmallProduct key={index} {...smallProduct} />
            )
        )}
      </div>
    </div>
  );
}

export default function AllProducts() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {categories.map((category, index) => (
          <CategoriesBlock key={index} category={category} />
        ))}
        <Image src={banner1} alt="Banner 1" />
      </div>
    </>
  );
}
