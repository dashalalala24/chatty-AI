const OPEN_AI_API_URL: string = "https://api.openai.com/v1/chat/completions";
const SPEECH_FLOW_API_URL: string = "https://api.speechflow.io/asr/file/v1";

const OPEN_AI_API_KEY = process.env.REACT_APP_OPEN_AI_API_KEY?.split(".")
  .reverse()
  .join("");
const SPEECH_FLOW_KEY_ID = process.env.REACT_APP_SPEECH_FLOW_KEY_ID;
const SPEECH_FLOW_KEY_SECRET = process.env.REACT_APP_SPEECH_FLOW_KEY_SECRET;

export {
  OPEN_AI_API_URL,
  SPEECH_FLOW_API_URL,
  OPEN_AI_API_KEY,
  SPEECH_FLOW_KEY_ID,
  SPEECH_FLOW_KEY_SECRET,
};
