import { FC, useState } from "react";
import "./Record.css";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../services/redux/reduxHooks";
import { stopRecording, startRecording } from "../../../../utils/recordVoice";
import {
  isRecordingSelector,
  toggleRecordingStatus,
} from "../../../../services/redux/slices/isRecording/isRecording";
import {
  getAnswer,
  getVoiceToText,
} from "../../../../services/redux/slices/chat/chat";
import { getTaskID } from "../../../../services/redux/slices/chat/chatAPI";
import { createFormData } from "../../../../utils/utils";
import {
  currentLanguageSelector,
  languageSelector,
} from "../../../../services/redux/slices/language/language";

const Record: FC = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(currentLanguageSelector);
  const language = useAppSelector(languageSelector);
  const isRecording = useAppSelector(isRecordingSelector);

  const [isDisabled, setIsDisabled] = useState(false);

  function handleRecordClick() {
    dispatch(toggleRecordingStatus(!isRecording));
    if (isRecording) {
      stopRecording()
        .then((data: File) => {
          setIsDisabled(true);
          return createFormData(currentLanguage, data);
        })
        .then((data: FormData) => getTaskID(data))
        .then((taskId) => {
          dispatch(getVoiceToText(taskId))
            .unwrap()
            .then(() => {
              dispatch(getAnswer());
            });
        })
        .finally(() => setIsDisabled(false));
    } else {
      startRecording();
    }
  }

  return (
    <div className="record">
      <button
        className={`record__button ${
          isRecording ? "record__button_active" : ""
        }`}
        type="button"
        onClick={handleRecordClick}
        id="record-button"
        disabled={isDisabled}
      />
      <h1 className="record__title">
        {isRecording
          ? language[currentLanguage].recordingStarted
          : language[currentLanguage].recordingStopped}
      </h1>
    </div>
  );
};

export default Record;
