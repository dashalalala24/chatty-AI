import { FC, useState } from "react";
import "./Record.css";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../services/redux/reduxHooks";

import { stopRecording, startRecording } from "../../../../utils/recordVoice";
import { toggleRecordingStatus } from "../../../../services/redux/slices/isRecording/isRecording";
import {
  getAnswer,
  getVoiceToText,
} from "../../../../services/redux/slices/chat/chat";
import { getTaskID } from "../../../../services/redux/slices/chat/chatAPI";
import { createFormData } from "../../../../utils/utils";

const Record: FC = () => {
  const dispatch = useAppDispatch();

  const currentLanguage = useAppSelector(
    (state) => state.language.currentLanguage
  );
  const language = useAppSelector((state) => state.language.language);

  const isRecording = useAppSelector((state) => state.isRecording);
  const [isDisabled, setIsDisabled] = useState(false);

  function handleRecordClick() {
    dispatch(toggleRecordingStatus(!isRecording));
    if (isRecording) {
      stopRecording()
        .then((data: File) => {
          setIsDisabled(true);
          return createFormData(data);
        })
        .then((data: FormData) => getTaskID(data))
        .then((taskId) => {
          return dispatch(getVoiceToText(taskId));
        })
        .then((res) => {
          dispatch(getAnswer(res.payload));
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
