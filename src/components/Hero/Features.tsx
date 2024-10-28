import {
  DeliveryTruck,
  Headphones,
  Package,
  ShoppingBag,
} from "@/assets/icons";
import { ReactNode } from "react";

export interface FeaturePropType {
  icon: ReactNode;
  heading: string;
  subHeading: string;
}

export function Feature({ icon, heading, subHeading }: FeaturePropType) {
  return (
    <div className="flex items-center gap-4">
      <div>{icon}</div>
      <div>
        <div>
          <p className="text-md font-600 text-gray-900">{heading}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400 font-400">{subHeading}</p>
        </div>
      </div>
    </div>
  );
}

const featuredata: FeaturePropType[] = [
  {
    icon: <DeliveryTruck />,
    heading: "Free Shipping",
    subHeading: "Free shipping on all your order",
  },
  {
    icon: <Headphones />,
    heading: "Customer Support 24/7",
    subHeading: "Instant access to Support",
  },
  {
    icon: <ShoppingBag />,
    heading: "100% Secure Payment",
    subHeading: "We ensure your money is save",
  },
  {
    icon: <Package />,
    heading: "Money-Back Guarantee",
    subHeading: "30 Days Money-Back Guarantee",
  },
];

export default function Features() {
  return (
    <div className="w-full flex items-center gap-8 justify-evenly bg-white shadow-lg border border-gray-50 rounded-lg p-10">
      {featuredata.map((feature) => (
        <Feature
          key={feature.heading}
          icon={feature.icon}
          heading={feature.heading}
          subHeading={feature.subHeading}
        />
      ))}
    </div>
  );
}
