import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
function getString(input, key) {
    const result = fd.get(key);
    return typeof result === 'string' ? result : null;
}
function getNumber(input, key) {
    const extractStringValueFirst = getstring(fd, key);
    if (extractStringValueFirst === null)
        return null;
    const convertToNumber = Number(extractStringValueFirst);
    return Number.isFinite(convertToNumber) ? convertToNumber : null;
}
export function UncontrolledForm() {
    const [val, setVal] = useState(undefined);
    const formRef = useRef(null);
    function handleFormSubmit(e) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const extractName = getString(fd, 'name') ?? 'No NAme';
        const extractNumber = getNumberValue(fd, 'age');
    }
    return (_jsxs("form", { onSubmit: handleFormSubmit, ref: formRef, children: [_jsx("input", { name: "name", defaultValue: 'Guest' }), _jsx("input", { type: "number", name: "age", defaultValue: "18", min: (0) }), _jsx("button", { type: "submit" }), _jsx("input", { value: val })] }));
}
