import { heroBG1 } from "@/assets/images";
import Image from "next/image";
import Button from "../Button";
import Features from "./Features";

export default function Slider() {
  return (
    <div className="py-6">
      <div className="bg-gray-50 w-[95rem] h-[50rem] mx-auto rounded-lg">
        <div className="w-full h-full flex items-center relative">
          {/* Slider text */}
          <div className="flex flex-col pl-24">
            <div className="mb-2">
              <p className="text-caps-md uppercase text-primary font-500">
                Welcome to shopery
              </p>
            </div>

            <div className="mb-7">
              <p className="text-display text-gray-900 font-600">
                Fresh & Healthy Organic Food
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-8">
              <p className="text-h5">
                <span className="font-400">Sale up to </span>
                <span className="text-warning font-600">30% OFF</span>
              </p>
              <p className="text-sm font-400 text-gray-500">
                Free shipping on all your order. we deliver, you enjoy
              </p>
            </div>

            <div>
              <Button arrow={true}>Shop now</Button>
            </div>
          </div>

          {/* Slider Img */}
          <div className="w-full h-full flex items-center justify-center pr-12">
            <Image src={heroBG1} alt="Hero Slider BG 1" />
          </div>

          {/* Tracker */}
          <div className="flex items-center gap-2 absolute bottom-28 left-1/2 -translate-x-1/2">
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-4 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          </div>

          {/* Features */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-14">
            <Features />
          </div>
        </div>
      </div>
    </div>
  );
}
