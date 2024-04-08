import React from 'react';
import { IInputProps } from './ui.types';

const Input = React.forwardRef<HTMLInputElement, IInputProps>(function Input(
    { type, className, label, id, required = false, ...props },
    ref,
) {
    return (
        <label htmlFor={id}>
            {label} {required && <span className="text-red-500">*</span>}
            <input
                id={id}
                className={`flex w-full border border-border rounded-xl p-3 mt-1 outline-none bg-transparent transition-colors focus-within:border-blaze-500 disabled:opacity-50 disabled:pointer-events-none disabled:select-none ${className}`}
                required={required}
                {...props}
                ref={ref}
            />
        </label>
    );
});

Input.displayName = 'Input';

export { Input };
