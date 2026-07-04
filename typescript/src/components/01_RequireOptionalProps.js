import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function UserCard({ id, name, subtitle }) {
    const displayName = name ?? "Guest";
    return (_jsxs("div", { children: [_jsx("strong", { children: _jsx("div", { id: id }) }), _jsx("p", { children: displayName }), subtitle ? _jsx("p", { children: subtitle }) : null] }));
}
