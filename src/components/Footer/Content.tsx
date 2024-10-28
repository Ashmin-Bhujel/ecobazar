import { Apple, GooglePlay } from "@/assets/icons";
import Link from "next/link";
import { ReactNode } from "react";

// Footer links
export interface FooterLinkPropType {
  title: string;
  href: string;
}

export function FooterLink({ title, href }: FooterLinkPropType) {
  return (
    <li className="hover:text-white font-500" key={title}>
      <Link href={href}>{title}</Link>
    </li>
  );
}

const MyAccountLinks: FooterLinkPropType[] = [
  { title: "My Account", href: "/" },
  { title: "Order History", href: "/" },
  { title: "Shopping Cart", href: "/" },
  { title: "Wishlist", href: "/" },
  { title: "Settings", href: "/" },
];

const HelpsLinks: FooterLinkPropType[] = [
  { title: "Contact", href: "/" },
  { title: "Terms & Condition", href: "/" },
  { title: "Privacy Policy", href: "/" },
];

const ProxyLinks: FooterLinkPropType[] = [
  { title: "About", href: "/" },
  { title: "Shop", href: "/" },
  { title: "Product", href: "/" },
  { title: "Products Details", href: "/" },
  { title: "Track Order", href: "/" },
];

// Links collection
export interface LinkCollectionPropType {
  heading: string;
  links: FooterLinkPropType[];
}

export function LinkCollection({ heading, links }: LinkCollectionPropType) {
  return (
    <div>
      <p className="text-xl font-500 text-white mb-5">{heading}</p>
      <ul className="flex flex-col gap-3 text-sm font-400 text-gray-400">
        {links.map((link) => (
          <FooterLink key={link.title} title={link.title} href={link.href} />
        ))}
      </ul>
    </div>
  );
}

const linkCollections: LinkCollectionPropType[] = [
  { heading: "My Account", links: MyAccountLinks },
  { heading: "Helps", links: HelpsLinks },
  { heading: "Proxy", links: ProxyLinks },
];

// App links
export interface AppLinkPropType {
  icon: ReactNode;
  storeName: string;
}

export function AppLink({ icon, storeName }: AppLinkPropType) {
  return (
    <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-md p-3">
      {icon}
      <div>
        <p className="text-tiny font-400 text-gray-300">Download on the</p>
        <p className="text-md font-500 text-white">{storeName}</p>
      </div>
    </button>
  );
}

const Apps: AppLinkPropType[] = [
  {
    icon: <Apple />,
    storeName: "Apple Store",
  },
  {
    icon: <GooglePlay />,
    storeName: "Google Play",
  },
];

export default function Content() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto border-b border-gray-800">
        <div className="flex items-start justify-between py-20">
          {/* Company */}
          <div className="w-80 flex flex-col gap-4">
            <div>
              <p className="text-xl font-500 text-white">About Shopery</p>
            </div>

            <div>
              <p className="text-sm font-400 text-gray-500">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <p className="border-b border-primary pb-2 text-sm font-500 text-white cursor-pointer">
                (219) 555-0114
              </p>
              <p className="text-md font-500 text-gray-500">or</p>
              <p className="border-b border-primary pb-2 text-sm font-500 text-white cursor-pointer">
                Proxy@gmail.com
              </p>
            </div>
          </div>

          {/* Footer links collections */}
          {linkCollections.map((linkCollection) => (
            <LinkCollection
              key={linkCollection.heading}
              heading={linkCollection.heading}
              links={linkCollection.links}
            />
          ))}

          {/* Download our Mobile App */}
          <div className="flex flex-col gap-5">
            <p className="text-xl font-500 text-white">
              Download our Mobile App
            </p>
            <div className="flex items-center gap-2">
              {Apps.map((app) => (
                <AppLink
                  key={app.storeName}
                  icon={app.icon}
                  storeName={app.storeName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
