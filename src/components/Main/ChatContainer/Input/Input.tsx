import { FC } from "react";
import "./Input.css";

const Input: FC = () => {
  return (
    <form className="input__form">
      <input
        className="input__field"
        type="text"
        placeholder="Введите Ваш запрос здесь"
      />
    </form>
  );
};

export default Input;
