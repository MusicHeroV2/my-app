import '../App.css'


interface Name{
    name: any
}

export const Name=(array: Name)=>{
    return(
        <div className="Name">
            {array.name}
        </div>
    )
}