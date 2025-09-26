import type { ReactNode } from "react";

export function FormField({ children }: { children: ReactNode }) {
    return (
        <fieldset>
            {children}
        </fieldset>
    )
}