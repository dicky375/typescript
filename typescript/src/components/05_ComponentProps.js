import { jsx as _jsx } from "react/jsx-runtime";
export function Button({ variant = 'primary', style, ...rest }) {
    const base = {
        padding: '10px'
    };
    const variantStyles = variant === 'primary'
        ? { backgroundColor: 'blue', color: 'white' }
        : { backgroundColor: 'gray', color: 'black' };
    return _jsx("button", { style: { ...base, ...variantStyles, ...style }, ...rest, children: "Click" });
}
