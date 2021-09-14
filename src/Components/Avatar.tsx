import '../App.css'

interface h {
     imgsrc: string
}

export const Avatar = ({ imgsrc }: h) => {

     return (

          <img className="img" src={imgsrc} alt="."></img>

     )

}