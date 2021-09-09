import { Avatar } from "./Avatar";
import { LastMessage } from "./LastMessage";
import { Name } from "./Name";
import '../App.css'

interface arr{
    array: any
}

export const Spisok=(props: arr)=>{
    return(
        <div className="Spisok">
            {props.array.map((array: arr)=>{
                return(<Spisok array={array}/>)
            }) }
        </div>
    )
}