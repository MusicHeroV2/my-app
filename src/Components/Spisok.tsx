import { Avatar } from "./Avatar";
import { LastMessage } from "./LastMessage";
import { Name } from "./Name";
import '../App.css'

interface p{
    name: string,
    id: number,
    lastmsg: string,
    imgsrc: string
}


export const Spisok=({id, name, lastmsg, imgsrc}:p)=>{
    return(
        <div className="Spisok">
            <Avatar imgsrc={imgsrc}/> 
            <div>
            <Name name={name}/>   
            <LastMessage lastmsg={lastmsg}/>
            </div>
        </div>
    )
}

