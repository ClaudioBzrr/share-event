interface FlyerProps{
    imageUrl:string
    eventTitle:string,
    date:Date,
    description:string,
    participants?:string[]
}

export function Flyer({
    date,
    description,
    eventTitle,
    imageUrl,
    participants
}:FlyerProps){
    return(
        <div className={`bg-[url(${imageUrl})]`}>
            
        </div>
    )
}