import { InputHTMLAttributes, MutableRefObject } from "react";

interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement>{

}

export function InputCustom({...rest}:InputCustomProps){
    return(
        <input
            className="bg-slate-900 rounded-lg text-[#fff] text-center  "
            {...rest}
        />
    )
}