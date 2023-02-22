import { InputCustom } from "../components/InputCustom";
import { useRef, useState } from "react";
import { format } from "date-fns";
import { ButtonCustom } from "../components/ButtonCustom,";


export function Form(){
    const inputHidden =  useRef <HTMLInputElement|null>(null)
    const [eventTitle,setEventTitle] =  useState<string>('')
    const [eventDescription,setEventDescription] = useState<string>('')
    const [eventDate,setEventDate] =  useState<string>(format(new Date,'dd/MM/yyyy'))
    const [imageUrl,setImageUrl] =  useState<string>('')

    function handleClickToSelectImage(e:Event){
        e.preventDefault()
        inputHidden.current && inputHidden.current.click()
    }

    function handleSelectImages(image:FileList){
        if(image.length == 1){
            const imageBlob =  new Blob([image[0]],{type:'image/bmp'})
            const imageBlobURL =  URL.createObjectURL(imageBlob)
            setImageUrl(imageBlobURL)
        }
    }
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
                <div>
                    <ButtonCustom
                        title="Escolher foto para o evento"
                        onClick={e => handleClickToSelectImage(e.nativeEvent)}
                    />
                    <input 
                        ref={inputHidden}
                        type='file'
                        accept="image/*"
                        required
                        className="hidden"
                        onChange={e => handleSelectImages(e.target.files!)}
                    />
                </div>
            </div>
        </div>
    )
}