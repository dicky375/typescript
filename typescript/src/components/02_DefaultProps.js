import { jsxs as _jsxs } from "react/jsx-runtime";
//shape ur data ->
export function GreetA({ name = 'Guest', shout = false }) {
    const text = shout ? name.toUpperCase() : name;
    return _jsxs("p", { children: ["hi ", text, " "] });
}
export function GreetB(props) {
    const name = props.name ?? 'Guest';
    const shout = props.shout ?? false;
    const text = shout ? name.toUpperCase() : name;
    return _jsxs("p", { children: ["hi ", text, " "] });
}
