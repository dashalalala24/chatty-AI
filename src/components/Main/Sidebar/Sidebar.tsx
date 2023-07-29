import { FC, useState } from "react";
import "./Sidebar.css";
import RequestMessage from "./RequestMessage/RequestMessage";
import HistoryInput from "./HistoryInput/HistoryInput";
import { useAppSelector } from "../../../services/redux/reduxHooks";

const messages = [
  "Как зарегистрировать право собственности на новую квартиру в РФ?",
  "Как узаконить перепланировку если площадь ванной комнаты была увеличена за счет коридора в России?",
  "Как узаконить перепланировку если площадь ванной комнаты была увеличена за счет коридора в России?",
];

const Sidebar: FC = () => {
  const currentLanguage = useAppSelector(
    (state) => state.language.currentLanguage
  );
  const language = useAppSelector((state) => state.language.language);

  const date = new Date().toLocaleDateString();
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);

  return (
    <section className="sidebar">
      <div className="sidebar__nav">
        <h2 className="sidebar__subtitle">
          {language[currentLanguage].history}
        </h2>
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
          <h3 className="sidebar__history-subtitle">
            {language[currentLanguage].emptyHistory}
          </h3>
        )}
      </section>
      <button className="sidebar__newchat-button">
        {language[currentLanguage].newChat}
      </button>
    </section>
  );
};

export default Sidebar;
