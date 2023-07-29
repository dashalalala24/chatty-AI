import { createSlice } from "@reduxjs/toolkit";

interface IMessage {
  [key: string]: string;
}

interface textsToTranslate {
  help: string;
  logInButton: string;
  history: string;
  emptyHistory: string;
  recordingStarted: string;
  recordingStopped: string;
  inputPlaceholder: string;
  newChat: string;
  exampleQuestions: string[];
  textSignUp: string;
  textSignIn: string;
  or: string;
  defaultMessageForNewUser: IMessage;
  helpMessage: IMessage;
}

interface LanguageState {
  currentLanguage: "ru" | "en";
  language: {
    ru: textsToTranslate;
    en: textsToTranslate;
  };
}
const initialState: LanguageState = {
  currentLanguage: "ru",
  language: {
    ru: {
      help: "Справка",
      logInButton: "Войти",
      history: "История",
      emptyHistory: "Запросов пока нет",
      recordingStarted: "Слушаю...",
      recordingStopped: "Помогу в работе. Только спроси",
      inputPlaceholder: "Введите Ваш запрос здесь",
      newChat: "Новый чат",
      exampleQuestions: [
        "Как узаконить планировку",
        "Элементы договора аренды",
        "Регистрация товарного знака",
      ],
      textSignUp: "Зарегистрируйся",
      textSignIn: "войди",
      or: " или ",
      defaultMessageForNewUser: {
        part_1:
          "Привет! Я — ChattyAI, твой голосовой помощник! Готов помочь с чем угодно, что связано с твоей работой.",
        part_2:
          "в свой аккаунт — так наша беседа сохранится, и ничего важногоне потеряется!",
        part_3:
          "Я с радостью исследую разные идеи, чтобы поддержать тебя. Но помни, я могу отклонить неуместные запросы.",
        part_4:
          "Выражай свои мысли понятно и ясно, и не стесняйся задавать уточняющие вопросы. Давай начнем! Жми на микрофон, спрашивай и я помогу!",
      },
      helpMessage: {
        part_1:
          "Привет! Я — ChattyAI, голосовой помощник с искусственным интеллектом для профессионального использования. Моя цель — помогать оптимизировать рабочие процессы и делать их более эффективными.",
        part_2:
          "Когда ты задаешь вопрос голосом, я даю ответ в виде текста. Просто нажми на значок микрофона, произнеси свой вопрос, и я постараюсь помочь.",
        part_3:
          "Помни, что я использую технологию ChatGPT от OpenAI, поэтому ответы могут быть выдуманными и не отображать моего собственного мнения. Но не волнуйся, я всегда постараюсь быть полезным!",
        part_4:
          'Если мой ответ не подходит или ты хочешь получить другую информацию, просто нажми кнопку "Ответь иначе", и я постараюсь дать новый ответ. А если тебе понравился ответ и хочешь узнать больше, нажми "Продолжай".',
        part_5:
          "Также, у меня есть История запросов, где ты можешь найти наши предыдущие диалоги, если нужно. И помни, для сохранения нашей беседы лучше зарегистрироваться или войти в свой аккаунт.",
        part_6:
          "Давай начнем, задай свой вопрос, и я постараюсь помочь как можно лучше!",
      },
    },
    en: {
      help: "Help",
      logInButton: "Login",
      history: "History",
      emptyHistory: "No request created yet",
      recordingStarted: "Listening...",
      recordingStopped: "I'll help you. Just ask",
      inputPlaceholder: "Please enter your question",
      newChat: "New chat",
      exampleQuestions: [
        "Non-disclosure agreement template",
        "Elements of a lease agreement",
        "Trademark registration",
      ],
      textSignUp: "Sign up",
      textSignIn: "sign in",
      or: " or ",
      defaultMessageForNewUser: {
        part_1:
          "Hello! I am ChattyAI, your voice assistant! Ready to help with anything related to your work.",
        part_2:
          " - this way our conversation will be saved, and nothing important will be lost!",
        part_3:
          "I'm happy to explore different ideas to support you. But remember, I can decline inappropriate requests.",
        part_4:
          "Express your thoughts clearly and concisely, and feel free to ask clarifying questions. Let's start! Click on the microphone and I will help!",
      },
      helpMessage: {
        part_1:
          "Hello! I am ChattyAI, an artificial intelligence voice assistant for professional use. My goal is to help streamline workflows and make them more efficient.",
        part_2:
          "When you ask a question with your voice, I give the answer in text. Just click the microphone icon, say your question and I'll try to help.",
        part_3:
          "Keep in mind that I am using OpenAI's ChatGPT technology, so answers may be fictitious and do not reflect my own opinion. But don't worry, I'll always try my best to be helpful!",
        part_4:
          'If my answer doesn\'t satisfy you, or if you want more information, just click the "Try again" button and I\'ll try to give a new answer. And if you liked the answer and want to know more, click "Continue".',
        part_5:
          "Also, I have a Request History where you can find our previous conversations if needed. And remember, to save our conversation, it's better to register or log into your account.",
        part_6:
          "Let's get started, ask your question and I'll try to help the best I can!",
      },
    },
  },
};

const languageSlice = createSlice({
  name: "@@language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const languageReducer = languageSlice.reducer;
