import { BaseSyntheticEvent, FC } from "react";
import "./Input.css";
import { useAppDispatch } from "../../../../services/redux/reduxHooks";
import {
  addTextQuestion,
  getAnswer,
} from "../../../../services/redux/slices/chat/chat";

export interface IChatMessage {
  text: string;
  owner: "user" | "ai" | "";
  createdAt: string;
}

const Input: FC = () => {
  const dispatch = useAppDispatch();

  const submitQuestion = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const inputValue = e.target.children[0].value;

    if (inputValue !== "") {
      const date = new Date().toLocaleString();

      dispatch(
        addTextQuestion({ text: inputValue, owner: "user", createdAt: date })
      );
      e.target.reset();
      dispatch(getAnswer(inputValue))
        .unwrap()
        .then(() => console.log("dispatched input"));
    }
  };

  return (
    <form
      className="input__form"
      onSubmit={(e) => {
        submitQuestion(e);
      }}
    >
      <input
        className="input__field"
        type="text"
        placeholder="Введите Ваш запрос здесь"
      />
    </form>
  );
};

export default Input;
