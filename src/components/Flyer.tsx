import {format} from 'date-fns'
interface FlyerProps{
    imageUrl:string
    title:string,
    description:string,
    date:Date,
    participants?:string[]
}

export function Flyer({
    date,
    description,
    title,
    imageUrl,
    participants
}:FlyerProps){
    return(
        <div className={`bg-[url(${imageUrl})]`}>
            <h1>{title}</h1>
            <div>
                <div>Data : </div>
                <span>{format(date,'dd"/"MM"/"yyyy')}</span>
            </div>

            <div>
                {description}
            </div>
        </div>
    )
}