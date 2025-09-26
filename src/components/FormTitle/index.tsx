import type { ClassAttributes, HTMLAttributes, JSX } from "react";

export function FormTitle(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2 {...props}>
            {props.children}
        </h2>
    )
}