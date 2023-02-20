interface FlyerProps{
    imageUrl:string
    title:string,
    date:Date,
    description:string,
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
            
        </div>
    )
}