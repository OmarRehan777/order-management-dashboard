import type { ReactNode } from "react";

type OrangeButtonProps = {
  className?: string;
  children: ReactNode;
};

export default function OrangeButton({ className = "", children }: OrangeButtonProps) {
  return (
    <button
      className={`${className} hover:cursor-pointer gradient-orange gradient-orange-button clickable`}
    >
      {children}
    </button>
  );
}



