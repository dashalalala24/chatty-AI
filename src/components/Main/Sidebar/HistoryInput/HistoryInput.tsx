import { FC, SyntheticEvent } from "react";
import "./HistoryInput.css";
import {
  currentLanguageSelector,
  languageSelector,
} from "../../../../services/redux/slices/language/language";
import { useAppSelector } from "../../../../services/redux/reduxHooks";

const HistoryInput: FC = () => {
  const currentLanguage = useAppSelector(currentLanguageSelector);
  const language = useAppSelector(languageSelector);

  return (
    <form className="historyinput__form">
      <input
        className="historyinput__field"
        type="text"
        placeholder={language[currentLanguage].historyPlaceholder}
      />
      <button
        className="historyinput__calender-button"
        onClick={(evt: SyntheticEvent) => {
          evt.preventDefault();
        }}
      />
    </form>
  );
};

export default HistoryInput;
