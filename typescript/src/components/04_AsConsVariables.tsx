

const VARIANTS = ['primary', 'secondary', 'ghost'] as const
type Variant = (typeof VARIANTS)[number]

type BadgeProps = {
    label : string;
    variant?: Variant

}

export function Badge({label, variant = VARIANTS[0]}: BadgeProps){

    const styles: Record<Variant, React.CSSProperties> = {
        primary : {
            color : 'red'
        },
        secondary : {
            color: 'yellow'
        },
        ghost : {
            color : 'black'

        }
    }
    return <span style={styles[variant]}>{label}</span>
}