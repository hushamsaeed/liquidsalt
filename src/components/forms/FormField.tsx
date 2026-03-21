import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes } from "react";

interface BaseFieldProps {
  label: string;
  error?: string;
  hint?: string;
}

/* ── Text Input ── */
interface InputFieldProps extends BaseFieldProps, InputHTMLAttributes<HTMLInputElement> {}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, hint, id, className = "", ...props }, ref) => {
    const fieldId = id || label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className={className}>
        <label htmlFor={fieldId} className="block text-sm font-medium text-ocean-navy mb-1">
          {label}
          {props.required && <span className="text-coral-gold ml-0.5" aria-hidden="true">*</span>}
        </label>
        <input
          ref={ref}
          id={fieldId}
          className={`
            w-full rounded-sm border px-3 py-2.5 text-sm text-ocean-navy
            placeholder:text-ocean-navy/40
            focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent
            transition-colors
            ${error ? "border-coral-gold" : "border-ocean-navy/20"}
          `}
          aria-invalid={!!error}
          aria-describedby={error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined}
          {...props}
        />
        {error && <p id={`${fieldId}-error`} className="mt-1 text-xs text-coral-gold">{error}</p>}
        {hint && !error && <p id={`${fieldId}-hint`} className="mt-1 text-xs text-ocean-navy/50">{hint}</p>}
      </div>
    );
  }
);
InputField.displayName = "InputField";

/* ── Select ── */
interface SelectFieldProps extends BaseFieldProps, SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  placeholder?: string;
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, error, hint, options, placeholder, id, className = "", ...props }, ref) => {
    const fieldId = id || label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className={className}>
        <label htmlFor={fieldId} className="block text-sm font-medium text-ocean-navy mb-1">
          {label}
          {props.required && <span className="text-coral-gold ml-0.5" aria-hidden="true">*</span>}
        </label>
        <select
          ref={ref}
          id={fieldId}
          className={`
            w-full rounded-sm border px-3 py-2.5 text-sm text-ocean-navy
            focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent
            transition-colors
            ${error ? "border-coral-gold" : "border-ocean-navy/20"}
          `}
          aria-invalid={!!error}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        {error && <p id={`${fieldId}-error`} className="mt-1 text-xs text-coral-gold">{error}</p>}
      </div>
    );
  }
);
SelectField.displayName = "SelectField";

/* ── Textarea ── */
interface TextareaFieldProps extends BaseFieldProps, TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ label, error, hint, id, maxLength, className = "", ...props }, ref) => {
    const fieldId = id || label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className={className}>
        <label htmlFor={fieldId} className="block text-sm font-medium text-ocean-navy mb-1">
          {label}
          {props.required && <span className="text-coral-gold ml-0.5" aria-hidden="true">*</span>}
        </label>
        <textarea
          ref={ref}
          id={fieldId}
          rows={4}
          maxLength={maxLength}
          className={`
            w-full rounded-sm border px-3 py-2.5 text-sm text-ocean-navy resize-y
            placeholder:text-ocean-navy/40
            focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent
            transition-colors
            ${error ? "border-coral-gold" : "border-ocean-navy/20"}
          `}
          aria-invalid={!!error}
          {...props}
        />
        {maxLength && (
          <p className="mt-1 text-xs text-ocean-navy/40 text-right">{maxLength} characters max</p>
        )}
        {error && <p id={`${fieldId}-error`} className="mt-1 text-xs text-coral-gold">{error}</p>}
      </div>
    );
  }
);
TextareaField.displayName = "TextareaField";

/* ── Honeypot ── */
export function HoneypotField({ register }: { register: (name: string) => Record<string, unknown> }) {
  return (
    <div className="absolute -left-[9999px]" aria-hidden="true">
      <label htmlFor="website">Website</label>
      <input type="text" id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
    </div>
  );
}
