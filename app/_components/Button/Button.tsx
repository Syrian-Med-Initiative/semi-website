"use client";
import { useRouter } from "next/navigation"; // Import useRouter
import styles from "./Button.module.css";

type ButtonProps = {
  clickFn?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  href?: string; // Add href prop for navigation
};

function Button({
  clickFn = () => {},
  children,
  type = "button",
  className = "",
  bgColor,
  textColor,
  hoverBgColor,
  href,
}: ButtonProps) {
  const router = useRouter(); // Initialize useRouter

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      e.preventDefault(); 
      router.push(href);
    }
    clickFn(e); // Call the provided click function
  };

  return (
    <button
      onClick={handleClick}
      type={type}
      className={`${styles.button} ${className}`}
      style={{
        ...(bgColor && { "--bg-color": bgColor }),
        ...(textColor && { "--text-color": textColor }),
        ...(hoverBgColor && { "--hover-bg-color": hoverBgColor || "var(--primary-light)" }),
      } as React.CSSProperties}
    >
      {children}
    </button>
  );
}

export default Button;
