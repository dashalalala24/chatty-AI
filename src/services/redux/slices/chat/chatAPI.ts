const openAIKey = process.env.REACT_APP_OPEN_AI_API_KEY;

function checkRes(res: any) {
  if (res.ok) {
    console.log("res.ok");
    return res.json();
  } else {
    console.log("ошибка в checkRes");
    return Promise.reject(res);
  }
}

export function fetchGetAIAnswer(data: string) {
  return fetch(`https://api.openai.com/v1/chat/completions`, {
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
