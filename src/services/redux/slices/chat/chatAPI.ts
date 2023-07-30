import { IDataMessage } from "../../../../types/types";
import {
  OPEN_AI_API_KEY,
  OPEN_AI_API_URL,
  SPEECH_FLOW_API_URL,
  SPEECH_FLOW_KEY_ID,
  SPEECH_FLOW_KEY_SECRET,
} from "../../../../utils/constants";

function checkRes(res: any) {
  if (res.ok) {
    return res.json();
  } else {
    console.log("ошибка в checkRes");
    return Promise.reject(res);
  }
}

export function fetchGetAIAnswer(dataArray: IDataMessage[]) {
  return fetch(OPEN_AI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPEN_AI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: dataArray,
    }),
  }).then(checkRes);
}

export function postPostUserAudio(data: FormData) {
  return fetch(`${SPEECH_FLOW_API_URL}/create`, {
    method: "POST",
    headers: {
      // "Content-Type": "multipart/form-data",
      keyId: `${SPEECH_FLOW_KEY_ID}`,
      keySecret: `${SPEECH_FLOW_KEY_SECRET}`,
      mode: "no-cors",
    },
    body: data,
  }).then(checkRes);
}

export const getTaskID = async (data: FormData) => {
  const response = await postPostUserAudio(data);
  if (response.code === 10000) {
    return response.taskId;
  }
};

export function getTranscriptionResult(taskId: string) {
  return fetch(`${SPEECH_FLOW_API_URL}/query/?taskId=${taskId}&resultType=4`, {
    method: "GET",
    headers: {
      keyId: `${SPEECH_FLOW_KEY_ID}`,
      keySecret: `${SPEECH_FLOW_KEY_SECRET}`,
      mode: "no-cors",
    },
    // body: JSON.stringify({ taskId: taskId }),
  }).then(checkRes);
}

export const getTranscriptionDone = async (taskId: string) => {
  return await getTranscriptionResult(taskId).then(
    (result) =>
      new Promise((resolve, reject) => {
        if (result.code === 11000) {
          resolve(result);
        }
        if (result.code === 11001) {
          // продолжаем запрашивать готовую транскрипцию
          let counter = 0;
          let timer: any = null;

          const stopRepeatIfNeeded = () => {
            counter += 1;

            // ждем ответ максимум в течении 40 секунд
            if (counter > 39) {
              clearInterval(timer);
              reject(new Error("Timeout for transcription exceeded"));
            }
          };

          timer = setInterval(() => {
            return getTranscriptionResult(taskId)
              .then((res) => {
                // если 11000 - готово
                if (res.code === 11000) {
                  clearInterval(timer);
                  return resolve(res);
                } else if (res.code === 11001) {
                  // 11001 - продолжаем запрашивать
                  stopRepeatIfNeeded();
                } else {
                  // любой другой статус, значит что-то не то с голосовым файлом
                  reject(
                    new Error("ошибка перевода голоса в текст: ", res.code)
                  );
                }
              })
              .finally(() => {
                stopRepeatIfNeeded();
              });
          }, 1000);
        } else {
          reject(new Error(result.error.message));
        }

        // reject(new Error("Unknown error"));
      })
  );
};
