import { ButtonArrow } from "@/assets/icons";
import { ReactNode } from "react";

export interface ButtonPropType
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "border" | "ghost";
  size?: "small" | "medium" | "large";
  arrow?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = "default",
  size = "medium",
  arrow = false,
  className,
}: ButtonPropType) {
  const sizeClass =
    size === "small"
      ? "px-6 py-3 text-tiny"
      : size === "medium"
      ? "px-8 py-4 text-sm"
      : size === "large" && "px-10 py-4 text-md";

  const variantClass =
    variant === "default"
      ? "bg-primary text-white hover:bg-primary-dark"
      : variant === "border"
      ? "bg-white text-primary border-2 border-primary hover:border-primary-dark hover:text-primary-dark"
      : variant === "ghost" &&
        "bg-green-gray-100 text-primary hover:bg-green-gray-200 hover:text-primary-dark";

  const gapSize =
    size === "small"
      ? "gap-2"
      : size === "medium"
      ? "gap-3"
      : size === "large" && "gap-4";

  return (
    <button
      className={`rounded-full transition-colors ease-in-out duration-200 font-600 ${sizeClass} ${variantClass} ${className}`}
    >
      <div className={`flex items-center justify-center ${gapSize}`}>
        <span>{children}</span>
        {arrow && <ButtonArrow />}
      </div>
    </button>
  );
}
