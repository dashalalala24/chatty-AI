import { FC } from "react";
import "./Tag.css";
import { useAppDispatch } from "../../../../services/redux/reduxHooks";
import {
  addChatMessage,
  getAnswer,
} from "../../../../services/redux/slices/chat/chat";
import { ITag } from "../../../../types/types";

const Tag: FC<ITag> = ({ text, answer }) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="tag"
      onClick={() => {
        const date = new Date().toLocaleString();
        dispatch(
          addChatMessage({
            text: answer,
            owner: "user",
            createdAt: date,
          })
        );
        dispatch(getAnswer());
      }}
    >
      {text}
    </button>
  );
};

export default Tag;
