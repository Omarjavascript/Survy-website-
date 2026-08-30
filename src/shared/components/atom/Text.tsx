import { cn } from "@/lib/utils";
interface Props {
  children?: React.ReactNode;
  className?: string;
  size?: "md" | "lg" | "sm";
  variant?: "primary" | "secondry" | "disabeld";
  center?: boolean;
}
export default function Text({
  className,
  children,
  size = "lg",
  variant = "disabeld",
  center = false,
}: Props) {
  const isCenter = center ? "text-center" : "";
  const variants = {
    primary: "ds-text-primary ",
    secondry: "ds-text-secondry",
    disabeld: "ds-text-disabeld",
  };
  const sizes = {
    md: "text-md",
    sm: "text-sm",
    lg: "text-lg",
  };

  return (
    <p className={cn(className, sizes[size], variants[variant], isCenter)}>
      {children}
    </p>
  );
}
