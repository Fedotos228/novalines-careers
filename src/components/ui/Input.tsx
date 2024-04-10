'use client'

import React from 'react'
import { IInputProps } from './ui.types'

const Input = React.forwardRef<HTMLInputElement, IInputProps>(function Input(
    { type, className, label, id, required = false, register, error, valueAsNumber, ...props },
    ref,
) {
    return (
        <label htmlFor={id}>
            {label} {required && <span className="text-red-500">*</span>}
            <input
                type={type}
                id={id}
                className={`flex w-full border border-border rounded-xl p-3 mt-1 outline-none bg-transparent transition-colors focus-within:border-blaze-500 disabled:opacity-50 disabled:pointer-events-none disabled:select-none ${className}`}
                {...register(id, { valueAsNumber })}
                {...props}
                ref={ref}
            />
            {error && <span className="error-message">{error.message}</span>}
        </label>
    )
})

Input.displayName = 'Input'

export { Input }
