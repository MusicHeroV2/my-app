import '../../App.css'
import image from '../../Pictures/A.png'

interface p {
    name: string
}

export const Message = ({ name }: p) => {
    return (
        <div className="msg">
            <div className="Name">Somebody</div>
            <div className="text">Был в сети 20 мин назад</div>
            <img className="image" src={image} alt = "."></img>
        </div>
    )
}