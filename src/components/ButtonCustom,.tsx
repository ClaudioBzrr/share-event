import { ButtonHTMLAttributes } from "react"

interface ButtonCustomProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title:string
}

export function ButtonCustom({title,...rest}:ButtonCustomProps){
    return(
        <button {...rest}>
            {title}
        </button>
    )
}