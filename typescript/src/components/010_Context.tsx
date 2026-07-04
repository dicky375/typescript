import { useContext, ReactNode , useState} from "react";



export type GlobalType = {
    flag : string;
    setFlag: (c:string) => void

}

export const MyGlobalContext = createContext<GlobalType>({
    flag : 'Hello world',
    setFlag: ()=>{}
})

export const useGlobalContext = () => useContext(MyGlobalContext)
const [flag, setFlag] = useState('')

export function GlobalState({children} : {children: ReactNode}){
    return (
        <MyGlobalContext.Provider value={{}}>{children}</MyGlobalContext.Provider>
    )
}


