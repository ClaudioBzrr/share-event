import { InputCustom } from "../components/InputCustom";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { format } from "date-fns";


export function Form(){

    const [eventTitle,setEventTitle] =  useState<string>('')
    const [eventDescription,setEventDescription] = useState<string>('')
    const [eventDate,setEventDate] =  useState<string>(format(new Date,'dd/MM/yyyy'))
    const [imageUrl,setImageUrl] =  useState<string>('')


    return(
        <div className="bg-slate-800 h-[100vh] w-[100vw] flex flex-row items-center justify-center">
            <div className="h-[70vh] w-[30vw] border-solid border-slate-900 border-[1px] rounded-xl">
                <div>
                    <label className="font-semibold text-white">Título do evento : </label>
                    <InputCustom 
                        onChange={e => setEventTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label className="font-semibold text-white" >Descrição : </label>
                    <InputCustom
                        onChange={e => setEventDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label className="font-semibold text-white" >Data do evento : </label>
                    <InputCustom 
                        placeholder={eventDate}
                        onChange={e => setEventDate(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}