'use client';

import React from 'react';
import { IInputProps } from './ui.types';

const Input = React.forwardRef<HTMLInputElement, IInputProps>(function Input(
    { type, className, label, id, required = false, error, ...props },
    ref,
) {
    return (
        <label htmlFor={id}>
            {label} {required && <span className="text-red-500">*</span>}
            <input
                type={type}
                id={id}
                className={`flex w-full border border-border rounded-xl p-3 mt-1 outline-none bg-transparent transition-colors focus-within:border-blaze-500 ${
                    error && 'border-red-500'
                } disabled:opacity-50 disabled:pointer-events-none disabled:select-none ${
                    className ? className : ''
                }`}
                {...props}
                ref={ref}
            />
            {error && <small className="text-red-500 text-sm block mt-1">{error.message}</small>}
        </label>
    );
});

Input.displayName = 'Input';

export { Input };
