import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useReducer } from "react";
function init(initialCount) {
    return { count: initialCount, step: 1 };
}
function CounterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + state.step };
        case "DECREMENT":
            return { ...state, count: state.count - state.step };
        case "RESET":
            return { ...state, count: action.to ?? 0 };
        default:
            return state;
    }
}
export function TypedReducer({ initial = 0 }) {
    const [state, dispatch] = useReducer(CounterReducer, initial, init);
    return (_jsxs("div", { children: [state.count, _jsx("button", { onClick: () => dispatch({ type: 'INCREMENT' }), children: "increment" }), _jsx("button", { onClick: () => dispatch({ type: 'DECREMENT' }), children: "decrement" }), _jsx("button", { onClick: () => dispatch({ type: 'RESET', to: 2 }), children: "reset" })] }));
}
function SmallChild({ dispatch }) {
    return (_jsx("div", { children: _jsx("button", { onClick: () => dispatch({ type: 'INCREMENT' }), children: "Click from child component" }) }));
}
