import { jsx as _jsx } from "react/jsx-runtime";
const VARIANTS = ['primary', 'secondary', 'ghost'];
export function Badge({ label, variant = VARIANTS[0] }) {
    const styles = {
        primary: {
            color: 'red'
        },
        secondary: {
            color: 'yellow'
        },
        ghost: {
            color: 'black'
        }
    };
    return _jsx("span", { style: styles[variant], children: label });
}
