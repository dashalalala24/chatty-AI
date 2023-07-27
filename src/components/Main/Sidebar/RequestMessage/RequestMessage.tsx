import { FC, useState } from "react";
import "./RequestMessage.css";
import RecyclebinButton from "./RecyclebinButton/RecyclebinButton";

interface IRequestMessage {
  text: string;
}

const RequestMessage: FC<IRequestMessage> = ({text}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='sidebar__message'
      onMouseOver={() => {setIsHovered(true)}}
      onMouseLeave={() => {setIsHovered(false)}}
    >
      <p className='sidebar__text'>{text}</p>
      {/* <RecyclebinButton
        onClick={(evt: any)=> {console.log(evt.target.closest('.sidebar__message').remove())}}
      /> */}
      {isHovered ? (
        <RecyclebinButton
          onClick={(evt: any)=> {console.log(evt.target.closest('.sidebar__message').remove())}}
        />
      ) : null
      }
    </div>
  );
};

export default RequestMessage;
