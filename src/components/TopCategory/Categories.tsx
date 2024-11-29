import Image, { StaticImageData } from "next/image";
import {
  fish,
  fruits,
  meat,
  snacks,
  softDrinks,
  vegetables,
} from "@/assets/images";

export interface CategoryPropType {
  src: StaticImageData;
  title: string;
  productsCount: number;
}

const categoryData: CategoryPropType[] = [
  {
    src: vegetables,
    title: "Vegetables",
    productsCount: 165,
  },
  {
    src: fruits,
    title: "Fresh Fruit",
    productsCount: 137,
  },
  {
    src: fish,
    title: "River Fish",
    productsCount: 34,
  },
  {
    src: meat,
    title: "Meat",
    productsCount: 165,
  },
  {
    src: softDrinks,
    title: "Water and Drinks",
    productsCount: 48,
  },
  {
    src: snacks,
    title: "Snacks",
    productsCount: 165,
  },
];

export function Category({ ...category }: CategoryPropType) {
  return (
    <div className="min-w-52 min-h-52 border hover:border-primary rounded-md flex flex-col justify-center items-center gap-5">
      <div>
        <Image src={category.src} alt={category.title} />
      </div>
      <div className="text-center">
        <p className="text-lg font-500 text-gray-900">{category.title}</p>
        <p className="text-sm font-400 text-gray-500">
          {category.productsCount} Products
        </p>
      </div>
    </div>
  );
}

export default function Categories() {
  return (
    <>
      <div>
        <p className="text-center text-h3 font-600 text-gray-900">
          Top Category
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 pt-12">
        {categoryData.map((category, index) => (
          <Category key={index} {...category} />
        ))}
      </div>
    </>
  );
}
