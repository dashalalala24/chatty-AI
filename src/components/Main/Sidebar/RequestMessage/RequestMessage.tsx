import { FC } from "react";
import "./RequestMessage.css";
import RecyclebinButton from "./RecyclebinButton/RecyclebinButton";

interface IRequestMessage {
  text: string;
}

const RequestMessage: FC<IRequestMessage> = ({text}) => {
  const button = document.createElement('button');
  button.setAttribute('class', 'sidebar__recyclebin-button');

  return (
    <div className='sidebar__message'
      onMouseOver={() => {}}
      onMouseLeave={() => {}}
    >
      <p className='sidebar__text'>{text}</p>
      <RecyclebinButton
        onClick={()=> {}}
      />
    </div>
  );
};

export default RequestMessage;
