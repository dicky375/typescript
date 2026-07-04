

//reuse 
import type { ComponentProps, CSSProperties } from "react"

type ButtonBaseProps = ComponentProps<'button'>


type ButtonProps = ButtonBaseProps & {variant? : 'primary' | 'secondary'}

export function Button({variant='primary',style, ...rest}: ButtonProps){
    const base: CSSProperties = {
        padding: '10px' 
    }

    const variantStyles: CSSProperties = variant === 'primary'
        ? { backgroundColor: 'blue', color: 'white' }
        : { backgroundColor: 'gray', color: 'black' }

    return <button style={{...base, ...variantStyles, ...style}} {...rest}>Click</button>
}