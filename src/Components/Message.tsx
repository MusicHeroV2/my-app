import '../App.css'
import { Name } from "./Name";
import image from '../Pictures/A.png'

interface p {
    name: any
}

export const Message = ({ name }: p) => {
    return (
        <div className="msg">
            {/* <Name name={name}/>  */}
            <div className="Name">Somebody</div>
            <div className="text">Был в сети 20 мин назад</div>
            <img className="image" src={image}></img>
        </div>
    )
}