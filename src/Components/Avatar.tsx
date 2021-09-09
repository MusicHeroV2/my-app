import '../App.css'
import image from '../Pictures/A.png'

interface Image{
     image:any
}

export const Avatar= ()=>{

return(
    
     <img className="img" src={image} alt="."></img>
    
)

}