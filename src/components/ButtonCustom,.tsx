import { ButtonHTMLAttributes } from "react"

interface ButtonCustomProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title:string
}

export function ButtonCustom({title,...rest}:ButtonCustomProps){
    return(
        <button
            className="bg-slate-500 p-2 rounded-lg font-semibold hover:bg-slate-600"
            {...rest}
        >
            {title}
        </button>
    )
}