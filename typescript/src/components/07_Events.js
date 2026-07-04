import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export function FormExample() {
    const [name, setName] = useState('');
    const [color, setColor] = useState('red');
    function handleNameChange(event) {
        setName(event.currentTarget.value);
        setName(event.target.value);
    }
    function handleKeyDown(event) {
        // event.key === 'Enter' -> do this or else
    }
    function handleButtonClick(event) {
        event.preventDefault();
    }
    function handleColorChange(event) {
    }
    function handleFinalFormSubmit(event) {
        event.preventDefault();
        //submit the Form
    }
    return (_jsxs("form", { onSubmit: handleFinalFormSubmit, children: [_jsx("input", { value: name, placeholder: "Enter your name", onChange: handleNameChange, onKeyDown: handleKeyDown }), _jsx("select", { value: color, onchange: handleColorChange, children: _jsx("option", { value: 'red', children: "Red" }) }), _jsx("button", { type: "submit", onClick: handleButtonClick, children: "Click" })] }));
}
