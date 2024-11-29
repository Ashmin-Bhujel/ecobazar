import Image from "next/image";
import { ProductPropType } from "./Products";

export default function Product({
  src,
  alt,
  name,
  price,
  rating,
}: ProductPropType) {
  return (
    <div className="border rounded-lg w-fit hover:border-primary overflow-hidden">
      <div className="size-64">
        <Image src={src} alt={alt} className="object-cover object-center" />
      </div>
      <div className="flex items-center justify-between p-4">
        <div>
          <p className="text-sm font-400 text-gray-700">{name}</p>
          <p className="text-md font-500 text-gray-900">${price}</p>
          <div>{rating}</div>
        </div>
        <div>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}
