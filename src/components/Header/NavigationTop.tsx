import { DropDownArrow, MapPin } from "@/assets/icons";
import Link from "next/link";

export default function NavigationTop() {
  return (
    <div className="bg-gray-800 text-tiny font-400 text-gray-300">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-3">
          {/* Location */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <MapPin className="group-hover:*:stroke-white" />
            <p className="group-hover:text-white group-hover:underline underline-offset-4">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center">
            {/* Language and Currency */}
            <div className="flex items-center gap-5 pr-5 border-r border-white/10">
              <div className="flex items-center gap-2 group cursor-pointer">
                <p className="group-hover:text-white">Eng</p>
                <DropDownArrow className="group-hover:*:stroke-white group-hover:rotate-180" />
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <p className="group-hover:text-white">USD</p>
                <DropDownArrow className="group-hover:*:stroke-white group-hover:rotate-180" />
              </div>
            </div>

            {/* Account */}
            <Link
              href="/signin"
              className="flex items-center gap-1 pl-5 hover:text-white"
            >
              <p>Sign In</p>
              <p>/</p>
              <p>Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
