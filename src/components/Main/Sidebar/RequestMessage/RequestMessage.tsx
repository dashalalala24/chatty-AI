import { BaseSyntheticEvent, FC, useState } from "react";
import "./RequestMessage.css";
import RecyclebinButton from "./RecyclebinButton/RecyclebinButton";

interface IRequestMessage {
  text: string;
}

const RequestMessage: FC<IRequestMessage> = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="sidebar__message"
      onMouseOver={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className="sidebar__text-container">
        <p className="sidebar__text">{text}</p>
        {isHovered ? (
          <RecyclebinButton
            onClick={(evt: BaseSyntheticEvent) => {
              evt.target.closest(".sidebar__message").remove();
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default RequestMessage;
