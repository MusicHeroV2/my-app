import { Avatar } from "./Avatar";
import { LastMessage } from "./LastMessage";
import { Name } from "./Name";
import '../App.css'
import { ar } from "../App";

interface p{
    props: any,
    ar: any,
    name: string
}


export const Spisok=(props:p)=>{
    return(
        <div className="Spisok">
            <Avatar/> 
            <div>
            <Name props={ar[1]}/>   
            <LastMessage/>
            </div>
        </div>
    )
}

