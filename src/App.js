import './App.css';
import { Spisok } from './Components/Spisok';
import { Message } from './Components/Message';
import { Input } from './Components/Input';
import { Switch } from './Components/Switch';

function App() {
  
const array=[
    {id:1, name:'Andrey', imgsrc:'../Pictures/A.png', lastmsg:'Something'},
    {id:2, name:'Daniil', imgsrc:'../Pictures/A.png', lastmsg:'that'},
    {id:3, name:'Vlad', imgsrc:'../Pictures/A.png', lastmsg:'we '},
    {id:4, name:'Vladimir', imgsrc:'../Pictures/A.png', lastmsg:'accept'}
  ]
  
  
  
  
  return (
    <div id="sos" className="App">
      <div className="empty"></div>
       <div className="main"> 
        <Spisok array={array}/>
         </div>
         <div className="Message">
           <div className="mes">
             <Message/>
             </div>
             <div className="Soob" >
           text
         </div>
         <div className="input">
           text<Input/>
         </div>
         </div>
         <div className="empty">
         <Switch/>
         </div>
    </div>
  );
}

export default App;