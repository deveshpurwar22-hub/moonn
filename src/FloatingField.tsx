import React from 'react';

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, error, id, className = '', ...props }, ref) => {
    return (
      <div className="relative">
        <input
          id={id}
          ref={ref}
          placeholder=" "
          className={`peer flex h-14 w-full rounded-xl border bg-white px-4 pt-5 pb-1.5 text-base shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/15 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${
            error ? 'border-destructive' : 'border-input'
          } ${className}`}
          {...props}
        />
        <label
          htmlFor={id}
          className="absolute left-4 top-4 text-muted-foreground text-base md:text-sm transition-all duration-200 pointer-events-none
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground
            peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary
            [&:not(:placeholder-shown)]:top-2 [&:not(:placeholder-shown)]:text-xs"
        >
          {label}
        </label>
        {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
      </div>
    );
  }
);
FloatingInput.displayName = 'FloatingInput';

interface FloatingTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const FloatingTextarea = React.forwardRef<HTMLTextAreaElement, FloatingTextareaProps>(
  ({ label, id, className = '', ...props }, ref) => {
    return (
      <div className="relative">
        <textarea
          id={id}
          ref={ref}
          placeholder=" "
          className={`peer flex min-h-[120px] w-full rounded-xl border border-input bg-white px-4 pt-6 pb-2 text-base shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/15 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-y ${className}`}
          {...props}
        />
        <label
          htmlFor={id}
          className="absolute left-4 top-5 text-muted-foreground text-base md:text-sm transition-all duration-200 pointer-events-none
            peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary
            [&:not(:placeholder-shown)]:top-2 [&:not(:placeholder-shown)]:text-xs"
        >
          {label}
        </label>
      </div>
    );
  }
);
FloatingTextarea.displayName = 'FloatingTextarea';

interface FloatingSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  children: React.ReactNode;
}

export const FloatingSelect = React.forwardRef<HTMLSelectElement, FloatingSelectProps>(
  ({ label, error, id, children, className = '', ...props }, ref) => {
    return (
      <div className="relative">
        <select
          id={id}
          ref={ref}
          className={`peer flex h-14 w-full rounded-xl border bg-white px-4 pt-5 pb-1.5 text-base shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/15 md:text-sm ${
            error ? 'border-destructive' : 'border-input'
          } ${className}`}
          {...props}
        >
          {children}
        </select>
        <label
          htmlFor={id}
          className="absolute left-4 top-2 text-xs text-primary transition-all duration-200 pointer-events-none"
        >
          {label}
        </label>
        {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
      </div>
    );
  }
);
FloatingSelect.displayName = 'FloatingSelect';
