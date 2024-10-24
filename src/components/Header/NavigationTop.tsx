import { DropDownArrow, MapPin } from "@/assets/icons";

export default function NavigationTop() {
  return (
    <div className="bg-gray-800 text-tiny font-400 text-gray-300">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-3">
          {/* Location */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <MapPin className="group-hover:*:stroke-white" />
            <p className="group-hover:text-white group-hover:underline underline-offset-2">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center">
            {/* Language and Currency */}
            <div className="flex items-center gap-5 pr-5 border-r border-white/10">
              <div className="flex items-center gap-2 group cursor-pointer">
                <p className="group-hover:text-white">Eng</p>
                <DropDownArrow className="group-hover:*:stroke-white" />
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <p className="group-hover:text-white">USD</p>
                <DropDownArrow className="group-hover:*:stroke-white" />
              </div>
            </div>

            {/* Account */}
            <div className="flex items-center gap-1 pl-5 hover:text-white">
              <p>Sign In</p>
              <p>/</p>
              <p>Sign Up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
