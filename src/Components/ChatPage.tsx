import "../App.css";
import { Switcher } from "./ChatComponents/Switcher";
import { Chat } from "./ChatComponents/Chat";
import { Input } from "./ChatComponents/Input";
import { Message } from "./ChatComponents/Message";
import image from "../Pictures/S.png";

export interface IChatPage {
  id: number;
  name: string;
  imgsrc: string;
  lastmsg: string;
}

const ChatPage = ({ data__ }: any) => {
  console.log(data__);
  return (

    <div id="sos" className="App">
      <div className="empty"></div>

      <div className="main">
        {data__.map(({ id, name, imgsrc, lastmsg }: IChatPage) => (
          <Chat name={name} id={id} imgsrc={imgsrc} lastmsg={lastmsg} />
        ))}
      </div>

      <div className="Message">
        <div className="mes">
          <Message name={data__.name} />
        </div>
        <div className="Soob">text</div>
        <div className="input">
          text
          <Input />
          <button className="btn" type="submit" form="form_1">
            <img className="ima" src={image} alt="." />
          </button>
        </div>
      </div>

      <div className="empty">
        <Switcher />
      </div>
      
    </div>
  );
};

export default ChatPage;
