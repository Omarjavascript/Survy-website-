import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  children?: React.ReactNode;
  size?: "md" | "sm" | "lg";
  variant?: "primary" | "secondry" | "zahry";
  center?: boolean;
  className?: string;
}
export default function Title({
  children,
  size = "lg",
  variant = "primary",
  center = false,
  className = "",
}: Props) {
  const sizes = {
    md: "text-md",
    sm: "text-sm",
    lg: "text-lg",
  };
  const variants = {
    primary: "ds-text-primary",
    secondry: "ds-text-secondry",
    zahry: "ds-text-zhry",
  };
  const isCenter = center ? "text-center" : "";
  return (
    <h2 className={cn(sizes[size], variants[variant], isCenter, className)}>
      {children}
    </h2>
  );
}
