import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export function Counter() {
    const [count, setCount] = useState(0); // inferred as a number
    return (_jsxs("div", { children: [count, _jsx("button", { onClick: () => setCount((prev) => prev + 1), children: "Increment" })] }));
}
function heavyDefault() {
    return 100;
}
export function LoaderDemo() {
    const [state, setState] = useState({ status: 'idle' });
    const [n, setN] = useState(() => heavyDefault());
    const [user, setUser] = useState(null);
    async function fetchData() {
        setState({ status: 'loading' });
        //mock api call
        setState({ status: 'success', data: fetched });
        //catch
        setState({ status: 'error', message: 'error!' });
    }
    return _jsx("div", { children: "Loader" });
}
