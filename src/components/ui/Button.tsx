import { forwardRef, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost-light" | "ghost-dark" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-cyan text-ocean-navy hover:bg-cyan/90 hover:shadow-glow hover:scale-[1.02]",
  secondary:
    "bg-ocean-navy text-salt-white hover:bg-ocean-navy/90 hover:scale-[1.02]",
  "ghost-light":
    "bg-transparent text-salt-white border-[1.5px] border-salt-white hover:bg-salt-white hover:text-ocean-navy",
  "ghost-dark":
    "bg-transparent text-ocean-navy border-[1.5px] border-ocean-navy hover:bg-ocean-navy hover:text-salt-white",
  danger:
    "bg-coral-gold text-manta-black hover:bg-coral-gold/90",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-8 py-3 text-base",
  lg: "px-10 py-4 text-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", fullWidth, className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center gap-2
          font-body font-semibold rounded-md
          transition-all duration-200 ease-out
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2
          disabled:opacity-50 disabled:pointer-events-none
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button, type ButtonProps, type Variant as ButtonVariant };
