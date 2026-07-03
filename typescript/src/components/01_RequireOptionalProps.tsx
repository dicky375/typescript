import type { ReactNode } from "react";

interface UsercardProps {
    id: string;
    name? : string;
    subtitle?:ReactNode
}

export function UserCard({id, name, subtitle}: UsercardProps){
    const displayName = name ?? "Guest"

    return (
        <div>

            <strong><div id={id}></div></strong>
            <p>{displayName}</p>
            {
                subtitle? <p>{subtitle}</p> : null
            }
        </div>
    )
}

