import { FC } from "react";
import "./Tag.css";
import { useAppDispatch } from "../../../../services/redux/reduxHooks";
import {
  addTextQuestion,
  getAnswer,
} from "../../../../services/redux/slices/chat/chat";
import { CURRENT_DATE } from "../../../../utils/constants";

interface ITag {
  text: string;
  answer: string;
}

const Tag: FC<ITag> = ({ text, answer }) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="tag"
      onClick={() => {
        dispatch(
          addTextQuestion({
            text: answer,
            owner: "user",
            createdAt: CURRENT_DATE,
          })
        );
        dispatch(getAnswer(text));
      }}
    >
      {text}
    </button>
  );
};

export default Tag;
