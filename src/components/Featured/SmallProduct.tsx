import Image from "next/image";
import { ProductPropType } from "./Products";

export default function SmallProduct({
  src,
  alt,
  name,
  price,
  rating,
}: ProductPropType) {
  return (
    <div className="border rounded-lg hover:border-primary overflow-hidden flex items-center w-80 h-28">
      <div className="size-24">
        <Image src={src} alt={alt} className="object-cover object-center" />
      </div>
      <div className="flex flex-1 items-center justify-between p-4">
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
