import * as React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  variant?: "default" | "secondary" | "outline" | "danger";
}

export function Button({
  className,
  buttonText,
  variant,
  ...props
}: ButtonProps) {
  const defaultStyles =
    "h-9 px-3 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const Styles = {
    default: "",
    danger:
      "bg-danger text-secondary-foreground border border-danger-border hover:bg-danger-hover active:bg-danger-active ",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-active ",
    outline:
      "border border-border bg-background text-secondary-foreground hover:bg-outline-hover active:bg-outline-active",
  };

  const variantStyles = variant ? Styles[variant] : Styles.default;

  const mergeStyles = twMerge(defaultStyles, variantStyles, className);
  return (
    <button className={mergeStyles} {...props}>
      {buttonText}
    </button>
  );
}
