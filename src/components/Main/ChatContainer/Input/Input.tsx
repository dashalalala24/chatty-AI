import { BaseSyntheticEvent, FC, useState } from "react";
import "./Input.css";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../services/redux/reduxHooks";
import {
  addChatMessage,
  getAnswer,
} from "../../../../services/redux/slices/chat/chat";
import {
  currentLanguageSelector,
  languageSelector,
} from "../../../../services/redux/slices/language/language";

const Input: FC = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(currentLanguageSelector);
  const language = useAppSelector(languageSelector);

  const [inputValue, setInputValue] = useState("");

  const handleDeleteClick = () => {
    setInputValue("");
  };

  const submitQuestion = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const inputValue = e.target.children[0].value;

    if (inputValue !== "") {
      const date = new Date().toLocaleString();

      setInputValue("");
      dispatch(
        addChatMessage({ text: inputValue, owner: "user", createdAt: date })
      );
      dispatch(getAnswer());
    }
  };

  return (
    <form
      className="input__form"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        submitQuestion(e);
      }}
    >
      <input
        className="input__field"
        type="text"
        value={inputValue}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(evt.target.value)
        }
        placeholder={language[currentLanguage].inputPlaceholder}
      />
      {inputValue !== "" ? (
        <div className="input__buttons">
          <button
            className="input__delete-button"
            onClick={handleDeleteClick}
            type="button"
          />
          <button className="input__submit-button" type="submit" />
        </div>
      ) : null}
    </form>
  );
};

export default Input;
