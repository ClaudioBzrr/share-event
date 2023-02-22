import { InputCustom } from "../components/InputCustom";
import { useRef, useState } from "react";
import { format } from "date-fns";
import { ButtonCustom } from "../components/ButtonCustom,";
import {Image} from 'phosphor-react'
import {useNavigate} from 'react-router-dom'

export function Form(){
    const navigate =  useNavigate()
    const inputHidden =  useRef <HTMLInputElement|null>(null)
    const [eventTitle,setEventTitle] =  useState<string>('')
    const [eventDescription,setEventDescription] = useState<string>('')
    const [eventDate,setEventDate] =  useState<string>(format(new Date,'dd/MM/yyyy'))
    const [imageBase64,setImageBase64] =  useState<string>('')

    function handleClickToSelectImage(e:Event){
        e.preventDefault()
        inputHidden.current && inputHidden.current.click()
    }

    function handleSelectImages(image:FileList){
        if(image.length == 1){
            const reader =  new FileReader()
            reader.addEventListener('load',() => typeof reader.result == 'string' && setImageBase64(reader.result))
            reader.readAsDataURL(image[0])
        }
    }

    function handleGenerateInvitation(){
        localStorage.setItem('title',eventTitle)
        localStorage.setItem('description',eventDescription)
        localStorage.setItem('image',imageBase64)
        navigate('/share')
    }
    return(
        <div className="bg-slate-800 h-[100vh] w-[100vw] flex flex-row items-center justify-center">
            <div className="h-[70vh] w-[30vw] border-solid border-slate-900 border-[1px] rounded-xl flex flex-col items-center justify-center">
                <section className="w-auto flex flex-col items-end justify-center">
                    <div className="mt-4">
                        <label className="font-semibold text-white">Título do evento : </label>
                        <InputCustom 
                            onChange={e => setEventTitle(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <label className="font-semibold text-white" >Descrição : </label>
                        <InputCustom
                            onChange={e => setEventDescription(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <label className="font-semibold text-white" >Data do evento : </label>
                        <InputCustom 
                            placeholder={eventDate}
                            onChange={e => setEventDate(e.target.value)}
                        />
                    </div>
                    <div className="mt-4 self-center w-auto flex flex-row items-center justify-center">
                        {
                            imageBase64 !="" ? (
                                <img src={imageBase64} className="w-9 h-9 mr-3 rounded-lg" alt="Imagem selecionada" />
                            ):(
                                <Image size={48} className="text-slate-500"/>
                            )
                        }
                        <ButtonCustom
                            title={imageBase64 =="" ? "Escolher foto para o evento" : "Alterar foto"}
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
                    <div className="self-center mt-24">
                        <ButtonCustom 
                            title="Gerar Convite"
                            onClick={handleGenerateInvitation}
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}