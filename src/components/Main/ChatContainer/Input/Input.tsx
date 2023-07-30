import { BaseSyntheticEvent, FC, useState } from "react";
import "./Input.css";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../services/redux/reduxHooks";
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
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(
    (state) => state.language.currentLanguage
  );
  const language = useAppSelector((state) => state.language.language);

  const submitQuestion = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const inputValue = e.target.children[0].value;

    if (inputValue !== "") {
      const date = new Date().toLocaleString();

      dispatch(
        addTextQuestion({ text: inputValue, owner: "user", createdAt: date })
      );
      e.target.reset();
      dispatch(getAnswer(inputValue));
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
        value={inputValue}
        onChange={(evt) => setInputValue(evt.target.value)}
        placeholder={language[currentLanguage].inputPlaceholder}
      />
      {inputValue !== "" ? (
        <div className="input__buttons">
          <button className="input__delete-button" />
          <button className="input__submit-button" />
        </div>
      ) : null}
    </form>
  );
};

export default Input;
