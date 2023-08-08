import { FC } from "react";
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
      <label className="historyinput__calender-label">
        <input className="historyinput__calender-button" type="date" />
      </label>
    </form>
  );
};

export default HistoryInput;
