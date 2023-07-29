import { FC, useState } from "react";
import "./Sidebar.css";
import RequestMessage from "./RequestMessage/RequestMessage";
import HistoryInput from "./HistoryInput/HistoryInput";

const messages = [
  "Как зарегистрировать право собственности на новую квартиру в РФ?",
  "Как узаконить перепланировку если площадь ванной комнаты была увеличена за счет коридора в России?",
  "Как узаконить перепланировку если площадь ванной комнаты была увеличена за счет коридора в России?",
];

const Sidebar: FC = () => {
  const date = new Date().toLocaleDateString();
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);

  return (
    <section className="sidebar">
      <div className="sidebar__nav">
        <h2 className="sidebar__subtitle">История</h2>
        <button
          className="sidebar__search-button"
          onClick={
            isSearchButtonClicked
              ? () => {
                  setIsSearchButtonClicked(false);
                }
              : () => {
                  setIsSearchButtonClicked(true);
                }
          }
        />
      </div>
      <section className="sidebar__history-container">
        {isSearchButtonClicked && messages.length !== 0 ? (
          <HistoryInput />
        ) : null}
        <p className="sidebar__date">{date}</p>
        {messages.length !== 0 ? (
          messages?.map((text, index) => {
            return <RequestMessage text={text} key={index} />;
          })
        ) : (
          <h3 className="sidebar__history-subtitle">Запросов пока нет</h3>
        )}
      </section>
      <button className="sidebar__newchat-button">Новый чат</button>
    </section>
  );
};

export default Sidebar;
