import '../App.css'
import { Name } from "./Name";
import image from '../Pictures/A.png'

interface p{
    ar: any
}

export const Message=(ar:p)=>{
    return(
        <div className="msg">
           <Name props={ar}/> 
           <div className="text">Был в сети 20 мин назад</div>
           <img className="image" src={image}></img>
        </div>
    )
}