import { FC, SyntheticEvent } from "react";
import "./HistoryInput.css";

const HistoryInput: FC = () => {
  return (
    <form className="historyinput__form">
      <input
        className="historyinput__field"
        type="text"
        placeholder="Поиск по истории"
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
