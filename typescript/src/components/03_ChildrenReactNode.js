import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Panel({ title, children }) {
    return (_jsxs("section", { children: [_jsx("h1", { children: title }), _jsx("div", { children: children ?? _jsx("em", { children: "No Children present" }) })] }));
}
export function RequiredChildrenPanel({ title, children }) {
    return (_jsxs("section", { children: [_jsx("h1", { children: title }), _jsxs("div", { children: [children, " "] })] }));
}
