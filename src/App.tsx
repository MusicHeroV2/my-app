import './App.css';
import { Spisok } from './Components/Spisok';
import { Message } from './Components/Message';
import { Input } from './Components/Input';
import { Switch } from './Components/Switch';
import image from './Pictures/S.png'

interface arr{
  id: number,
  name:string,
  imgsrc: string,
  lastmsg: string,
}

export const ar=[
  {id:1, name:'Andrey', imgsrc:'https://mdate.zahav.ru/media/images/polls/748/tb_poll.jpg', lastmsg:'Something'},
  {id:2, name:'Danil', imgsrc:'https://zabaka.ru/upload/2016/02/celebrity/celebrity_07.jpg', lastmsg:'that'},
  {id:3, name:'Vlad', imgsrc:'http://ru.fishki.net/picsw/082011/18/post/portret/portret-006.jpg', lastmsg:'we '},
  {id:4, name:'Vladimir', imgsrc:'http://www.weareart.ru/public/uploads/news/967/b-IMG_2128edfef1b9.jpg', lastmsg:'accept'}
]

const App = ({name,id,imgsrc,lastmsg}:arr) => {
  
  
  return (


    <div id="sos" className="App">
      <div className="empty"></div>
       <div className="main"> 
       {ar.map(({name,id,imgsrc,lastmsg}:arr) => (
              <Spisok name={name} id={id} imgsrc={imgsrc} lastmsg={lastmsg}/>
            ))}
          
         </div>
         <div className="Message">
           <div className="mes">
             <Message name={name}/>
             </div>
             <div className="Soob" >
           text
         </div>
         <div className="input">
           text<Input/><button  className="btn" type="submit" form="form_1"><img className="ima" src={image} alt='.'/></button>
         </div>
         </div>
         <div className="empty">
         <Switch/>
         </div>
    </div>
  );
}

export default App;
