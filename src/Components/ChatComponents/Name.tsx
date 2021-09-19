import '../../App.css'


interface a {
    name: string
}

export const Name = ({ name }: a) => {


    return (
        <div className="Name">
            {name}
        </div>
    )
}