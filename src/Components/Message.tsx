import '../App.css'
import { Name } from "./Name";
import image from '../Pictures/A.png'


export const Message=()=>{
    return(
        <div className="msg">
           <Name name={name}/> 
           <div className="text">Был в сети 20 мин назад</div>
           <img className="image" src={image}></img>
        </div>
    )
}