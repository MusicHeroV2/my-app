import { Avatar } from "./Avatar";
import { LastMessage } from "./LastMessage";
import { Name } from "./Name";
import '../App.css'

export const Spisok=()=>{
    return(
        <div className="Spisok">
            <Avatar/> 
            <div>
            <Name name={name}/>
            <LastMessage/>
            </div>
        </div>
    )
}