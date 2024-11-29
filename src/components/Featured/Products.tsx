import { StaticImageData } from "next/image";
import Product from "./Product";
import {
  greenApple,
  chaniseCabbage,
  greenLettuce,
  greenCapsicum,
  corn,
} from "@/assets/images";

export interface ProductPropType {
  src: StaticImageData;
  alt: string;
  name: string;
  price: number;
  rating: number;
}

const products: ProductPropType[] = [
  {
    src: greenApple,
    alt: "Green Apple",
    name: "Green Apple",
    price: 14.99,
    rating: 4,
  },
  {
    src: chaniseCabbage,
    alt: "Chanise Cabbage",
    name: "Chanise Cabbage",
    price: 14.99,
    rating: 4,
  },
  {
    src: greenLettuce,
    alt: "Green Lettuce",
    name: "Green Lettuce",
    price: 14.99,
    rating: 4,
  },
  {
    src: greenCapsicum,
    alt: "Green Capsicum",
    name: "Green Capsicum",
    price: 14.99,
    rating: 4,
  },
  {
    src: corn,
    alt: "Corn",
    name: "Corn",
    price: 14.99,
    rating: 4,
  },
];

export default function Products() {
  return (
    <>
      <div>
        <p className="text-center text-h3 font-600 text-gray-900">
          Featured Products
        </p>
      </div>
      <div className="my-12 flex flex-wrap items-center justify-center gap-5">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </>
  );
}
