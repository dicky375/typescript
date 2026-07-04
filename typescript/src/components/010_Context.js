import { jsx as _jsx } from "react/jsx-runtime";
import { useContext, useState } from "react";
export const MyGlobalContext = createContext({
    flag: 'Hello world',
    setFlag: () => { }
});
export const useGlobalContext = () => useContext(MyGlobalContext);
const [flag, setFlag] = useState('');
export function GlobalState({ children }) {
    return (_jsx(MyGlobalContext.Provider, { value: {}, children: children }));
}
