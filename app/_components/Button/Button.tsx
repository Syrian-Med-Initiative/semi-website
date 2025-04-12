"use client";
import styles from "./Button.module.css";

type ButtonProps = {
  clickFn: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
};

function Button({
  clickFn,
  children,
  type = "button",
  className = "",
  bgColor,
  textColor,
  hoverBgColor,
}: ButtonProps) {
  return (
    <button
      onClick={(e) => clickFn(e)}
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
