import '../App.css'

interface g{
    lastmsg:string
}

export const LastMessage=({lastmsg}:g)=>{
    return(
        <div className="Lastmsg">
            {lastmsg}
        </div>
    )
}