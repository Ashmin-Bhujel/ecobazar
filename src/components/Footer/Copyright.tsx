import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa6";
import {
  applePay,
  visa,
  discovery,
  mastercard,
  securePayment,
} from "@/assets/images";

// Social links
export interface SocialLinkPropType {
  icon: ReactNode;
  title: string;
  href: string;
}

export function SocialLink({ icon, title, href }: SocialLinkPropType) {
  return (
    <a
      href={href}
      title={title}
      className="inline-block rounded-full hover:bg-primary active:bg-primary-dark p-3 w-fit text-white"
    >
      {icon}
    </a>
  );
}

const SocialLinks: SocialLinkPropType[] = [
  {
    icon: <FaFacebookF />,
    title: "Facebook",
    href: "/",
  },
  {
    icon: <FaXTwitter />,
    title: "X/Twitter",
    href: "/",
  },
  {
    icon: <FaPinterestP />,
    title: "Pinterest",
    href: "/",
  },
  {
    icon: <FaInstagram />,
    title: "Instagram",
    href: "/",
  },
];

// Payments
export interface PaymentPropType {
  image: StaticImageData;
  title: string;
  href: string;
}

export function Payment({ image, title, href }: PaymentPropType) {
  return (
    <a
      href={href}
      className="border border-white/0 hover:border-gray-500 rounded-md"
    >
      <Image src={image} alt={title} title={title} />
    </a>
  );
}

const PaymentsLinks: PaymentPropType[] = [
  {
    image: applePay,
    title: "Apple Pay",
    href: "/",
  },
  {
    image: visa,
    title: "Visa",
    href: "/",
  },
  {
    image: discovery,
    title: "Discovery",
    href: "/",
  },
  {
    image: mastercard,
    title: "Mastercart",
    href: "/",
  },
  {
    image: securePayment,
    title: "Secure Payment",
    href: "/",
  },
];

const currentYear: number = new Date().getFullYear();

export default function Copyright() {
  return (
    <div className="bg-gray-900 text-gray-500">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-6">
          {/* Social links */}
          <div className="flex items-center gap-2">
            {SocialLinks.map((link) => (
              <SocialLink
                key={link.title}
                icon={link.icon}
                title={link.title}
                href={link.href}
              />
            ))}
          </div>

          {/* Copyright text */}
          <div>
            <p className="text-sm font-400 text-gray-500">
              Ecobazar eCommerce © {currentYear}. All Rights Reserved
            </p>
          </div>

          {/* Payments */}
          <div className="flex items-center gap-2">
            {PaymentsLinks.map((link) => (
              <Payment
                key={link.title}
                image={link.image}
                title={link.title}
                href={link.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
