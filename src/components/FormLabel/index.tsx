import type { JSX, LabelHTMLAttributes } from "react";

export function FormLabel(props: JSX.IntrinsicAttributes & LabelHTMLAttributes<HTMLLabelElement>) {
    return (
        <label {...props}>
            {props.children}
        </label>
    )
}