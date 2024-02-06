import * as React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

export function Button({ className, buttonText, ...props }: ButtonProps) {
  const defaultStyles =
    "h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const mergeStyles = twMerge(defaultStyles, className);
  return (
    <button className={mergeStyles} {...props}>
      {buttonText}
    </button>
  );
}
