import '../App.css'


interface a{
    props: any
}

export const Name=({props}:a)=>{
   
   
    return(
        <div className="Name">
           {props.name}
        </div>
    )
}