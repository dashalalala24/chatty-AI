import { BaseSyntheticEvent, FC } from "react";
import "./Input.css";
import { useAppDispatch } from "../../../../services/redux/reduxHooks";
import {
  addMessage,
  getAnswer,
} from "../../../../services/redux/slices/chat/chat";

export interface IChatMessage {
  text: string;
  owner: "user" | "ai" | "";
  createdAt: string;
}

const Input: FC = () => {
  const dispatch = useAppDispatch();

  // function checkRes(res: any) {
  //   if (res.ok) {
  //     return res.json();
  //   } else {
  //     return Promise.reject(res);
  //   }
  // }

  // function fetchGetAIAnswer() {
  //   return fetch(`https://api.openai.com/v1/chat/completions`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Bearer: "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",
  //     },
  //   }).then(checkRes);
  // }

  // function getAnswer = () => {
  //   const response = await fetchGetAIAnswer();
  //     return response.data;
  // }

  const submitQuestion = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const inputValue = e.target.children[0].value;

    if (inputValue !== "") {
      const date = new Date().toLocaleString();

      dispatch(
        addMessage({ text: inputValue, owner: "user", createdAt: date })
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
