import { useRef, type FormEvent } from "react";

function getString(input: FormData, key: string): string | null {
    const result = fd.get(key)

    return typeof result === 'string' ? result : null
}

function getNumber(input: FormData, key: number): string | null {
      const extractStringValueFirst = getstring(fd, key)

      if(extractStringValueFirst === null) return null

      const convertToNumber = Number(extractStringValueFirst)
      return Number.isFinite(convertToNumber) ? convertToNumber : null
}

export function UncontrolledForm(){
    const [val, setVal] = useState<string | undefined>(undefined)

    const formRef = useRef<HTMLFormElement | null>(null)

        function handleFormSubmit(e: FormEvent<HTMLFormElement>){
            e.preventDefault()
                const fd = new FormData(e.currentTarget)
                const extractName = getString(fd, 'name') ?? 'No NAme'
                const extractNumber = getNumberValue(fd, 'age')
            
        }

    return (
        <form onSubmit={handleFormSubmit} ref={formRef} >
            <input name= "name" defaultValue='Guest'/>
            <input type="number" name="age" defaultValue="18" min={(0)}/>
            <button type="submit"></button>
            <input value={val}/>
        </form>
    )
}