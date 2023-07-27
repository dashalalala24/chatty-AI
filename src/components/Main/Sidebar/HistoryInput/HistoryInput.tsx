import { FC } from "react";
import "./HistoryInput.css";

const HistoryInput: FC = () => {
  return (
    <form className='historyinput__form'>
      <input
        className='historyinput__field'
        type='text'
        placeholder='Поиск по истории'
      />
    </form>
  );
};

export default HistoryInput;
