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
      Authorization:
        "Bearer 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",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        // { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: data },
      ],
    }),
  }).then(checkRes);
}
