import { DropDownArrow, PhoneCall } from "@/assets/icons";
import Link from "next/link";

export interface NavLinkPropType {
  title: string;
  href: string;
  isDropDown: boolean;
}

export function NavLink({ title, href, isDropDown }: NavLinkPropType) {
  return (
    <Link href={href} className="group">
      <div className="flex items-center gap-1">
        <span className="group-hover:text-white">{title}</span>
        {isDropDown && (
          <DropDownArrow className="size-3 group-hover:*:stroke-white" />
        )}
      </div>
    </Link>
  );
}

const links: NavLinkPropType[] = [
  {
    title: "Home",
    href: "/",
    isDropDown: true,
  },
  {
    title: "Shop",
    href: "/",
    isDropDown: true,
  },
  {
    title: "Pages",
    href: "/",
    isDropDown: true,
  },
  {
    title: "Blogs",
    href: "/",
    isDropDown: true,
  },
  {
    title: "About Us",
    href: "/",
    isDropDown: false,
  },
  {
    title: "Contact Us",
    href: "/",
    isDropDown: false,
  },
];

export default function NavigationBottom() {
  return (
    <div className="bg-gray-800 text-sm text-gray-300 font-500">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-5">
          {/* Links */}
          <div>
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <NavLink
                  key={link.title}
                  title={link.title}
                  href={link.href}
                  isDropDown={link.isDropDown}
                />
              ))}
            </ul>
          </div>

          {/* Call */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <PhoneCall />
            <p className="text-white group-hover:underline underline-offset-2">
              (219) 555-0114
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
