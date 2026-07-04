import { useState, type ChangeEvent } from "react"



export function FormExample(){
    const [name, setName] = useState('')
    const [color, setColor] = useState('red')

    function handleNameChange(event: ChangeEvent<HTMLInputElement>){
        setName(event.currentTarget.value)
        setName(event.target.value)
    }

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>){

        // event.key === 'Enter' -> do this or else
    }

    function handleButtonClick(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault()
    }

    function handleColorChange(event : ChangeEvent<HTMLSelectElement> ){
        

    }

    function handleFinalFormSubmit(event: FormEvent<HTMLFormElement>){

        event.preventDefault()
        //submit the Form
    }
    return (
        <form onSubmit={handleFinalFormSubmit}>
            <input 
            value={name}
            placeholder="Enter your name"
            onChange={handleNameChange}
            onKeyDown={handleKeyDown}
            />
            <select value={color} onchange={handleColorChange}>
                <option value='red'>Red</option>
            </select>
            <button type="submit" onClick={handleButtonClick}>Click</button>
        </form>
    )
}