import type { InputHTMLAttributes, JSX } from "react";

export function FormInput(props: JSX.IntrinsicAttributes & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input {...props} />
    )
}