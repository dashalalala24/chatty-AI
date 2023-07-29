import {
  OPEN_AI_API_URL,
  SPEECH_FLOW_API_URL,
} from "../../../../utils/constants";

const openAIKey = process.env.REACT_APP_OPEN_AI_API_KEY;
const speechFlowkeyId = process.env.REACT_APP_SPEECH_FLOW_KEY_ID;
const speechFlowkeySecret = process.env.REACT_APP_SPEECH_FLOW_KEY_SECRET;

function checkRes(res: any) {
  if (res.ok) {
    console.log("res.ok");
    return res.json();
  } else {
    console.log("ошибка в checkRes");
    return Promise.reject(res);
  }
}

export function fetchGetAIAnswer(data: string | unknown) {
  return fetch(OPEN_AI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openAIKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: data }],
    }),
  }).then(checkRes);
}

export function postPostUserAudio(data: FormData) {
  return fetch(`${SPEECH_FLOW_API_URL}/create`, {
    method: "POST",
    headers: {
      // "Content-Type": "multipart/form-data",
      keyId: `${speechFlowkeyId}`,
      keySecret: `${speechFlowkeySecret}`,
      mode: "no-cors",
    },
    body: data,
  }).then(checkRes);
}

export const getTaskID = async (data: FormData) => {
  const response = await postPostUserAudio(data);
  if (response.code === 10000) {
    console.log(response.taskId);
    return response.taskId;
  }
};

export function getTranscriptionResult(taskId: string) {
  return fetch(`${SPEECH_FLOW_API_URL}/query/?taskId=${taskId}&resultType=4`, {
    method: "GET",
    headers: {
      keyId: `${speechFlowkeyId}`,
      keySecret: `${speechFlowkeySecret}`,
      mode: "no-cors",
    },
    // body: JSON.stringify({ taskId: taskId }),
  }).then(checkRes);
}

export const getTranscriptionDone = async (taskId: string) => {
  return await getTranscriptionResult(taskId).then(
    (result) =>
      new Promise((resolve, reject) => {
        console.log("promise result", result);
        if (result.code === 11000) {
          console.log("getTranscriptionDone if result.code === 11000", result);
          resolve(result);
        }
        if (result.code === 11001) {
          // продолжаем запрашивать готовую транскрипцию
          console.log("getTranscriptionDone if result.code === 11001", result);
          let counter = 0;
          let timer: any = null;

          const stopRepeatIfNeeded = () => {
            counter += 1;

            // ждем ответ максимум в течении 40 секунд
            if (counter > 39) {
              clearInterval(timer);
              console.log("stopRepeatIfNeeded counter > 15", result);
              reject(new Error("Timeout for transcription exceeded"));
            }
          };

          timer = setInterval(() => {
            return getTranscriptionResult(taskId)
              .then((res) => {
                // если 11000 - готово
                if (res.code === 11000) {
                  console.log("timer res.code === 11000", res);
                  clearInterval(timer);
                  return resolve(res);
                } else if (res.code === 11001) {
                  console.log("timer res.code === 11001", res);
                  // 11001 - продолжаем запрашивать
                  stopRepeatIfNeeded();
                } else {
                  // любой другой статус, значит что-то не то с голосовым файлом
                  console.log("ошибка перевода голоса в текст: " + res.code);
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
          console.log("getTranscriptionDone ошибка");
          reject(new Error(result.error.message));
        }

        // reject(new Error("Unknown error"));
      })
  );
};
