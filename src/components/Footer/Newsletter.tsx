import { Logo } from "@/assets/icons";
import Link from "next/link";
import Button from "../Button";

export default function Newsletter() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-12">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3">
              <Logo className="size-10" />
              <p className="text-h5 text-green-gray-900 font-500">Ecobazar</p>
            </div>
          </Link>

          {/* Text */}
          <div className="flex flex-col gap-1">
            <p className="text-2xl font-500 text-gray-900">
              Subcribe our Newsletter
            </p>
            <p className="text-sm font-400 text-gray-400">
              Pellentesque eu nibh eget mauris congue mattis matti.
            </p>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center bg-white pl-6 border border-gray-100 rounded-full">
              {/* Input */}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                className="outline-none border-none bg-white pr-6"
              />

              {/* Button */}
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
