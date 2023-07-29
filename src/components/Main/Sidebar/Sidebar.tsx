import { FC, useState } from "react";
import "./Sidebar.css";
import RequestMessage from "./RequestMessage/RequestMessage";
import HistoryInput from "./HistoryInput/HistoryInput";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../services/redux/reduxHooks";
import {
  IChatMessage,
  resetChat,
} from "../../../services/redux/slices/chat/chat";

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(
    (state) => state.language.currentLanguage
  );
  const language = useAppSelector((state) => state.language.language);

  const chatMessages = useAppSelector((state) => state.chat.chatMessages);
  const date = new Date().toLocaleDateString();
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);

  const userMessages = chatMessages.reduce(function (
    messagesArray: string[],
    message: IChatMessage
  ) {
    if (message.owner === "user") {
      messagesArray.push(message.text);
    }
    return messagesArray;
  },
  []);

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
        {isSearchButtonClicked && userMessages.length ? <HistoryInput /> : null}
        {userMessages.length ? <p className="sidebar__date">{date}</p> : null}
        {userMessages.length ? (
          userMessages.map((text, index) => {
            return <RequestMessage text={text} key={index} />;
          })
        ) : (
          <h3 className="sidebar__history-subtitle">
            {language[currentLanguage].emptyHistory}
          </h3>
        )}
      </section>
      <button
        className="sidebar__newchat-button"
        onClick={() => dispatch(resetChat())}
      >
        {language[currentLanguage].newChat}
      </button>
    </section>
  );
};

export default Sidebar;
