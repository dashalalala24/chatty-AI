import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { LanguageState } from "../../../../types/types";

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
      historyPlaceholder: "Поиск по истории",
      newChat: "Новый чат",
      exampleQuestions: [
        "Как узаконить планировку",
        "Элементы договора аренды",
        "Регистрация товарного знака",
      ],
      tryAgainTag: "Ответь иначе",
      continueTag: "Продолжай",
      textSignUp: "Зарегистрируйся",
      textSignIn: "войди",
      or: " или ",
      defaultMessageForNewUser: {
        part_1:
          "Привет! Я — ChattyAI, твой голосовой помощник! Готов помочь с чем угодно, что связано с твоей работой.",
        part_2:
          "в свой аккаунт — так наша беседа сохранится, и ничего важного не потеряется!",
        part_3:
          "Я с радостью исследую разные идеи, чтобы поддержать тебя. Но помни, я могу отклонить неуместные запросы.",
        part_4:
          "Выражай свои мысли понятно и ясно, и не стесняйся задавать уточняющие вопросы. Давай начнем! Жми на микрофон, спрашивай и я помогу!",
      },
      helpMessage: `Привет! Я — ChattyAI, голосовой помощник с искусственным интеллектом для профессионального использования. Моя цель — помогать оптимизировать рабочие процессы и делать их более эффективными. \n\n Когда ты задаешь вопрос голосом, я даю ответ в виде текста. Просто нажми на значок микрофона, произнеси свой вопрос, и я постараюсь помочь. \n\n Помни, что я использую технологию ChatGPT от OpenAI, поэтому ответы могут быть выдуманными и не отображать моего собственного мнения. Но не волнуйся, я всегда постараюсь быть полезным! \n\n Если мой ответ не подходит или ты хочешь получить другую информацию, просто нажми кнопку "Ответь иначе", и я постараюсь дать новый ответ. А если тебе понравился ответ и хочешь узнать больше, нажми "Продолжай" \n\n Также, у меня есть История запросов, где ты можешь найти наши предыдущие диалоги, если нужно. И помни, для сохранения нашей беседы лучше зарегистрироваться или войти в свой аккаунт. \n\n Давай начнем, задай свой вопрос, и я постараюсь помочь как можно лучше!`,
    },
    en: {
      help: "Help",
      logInButton: "Login",
      history: "History",
      emptyHistory: "No request created yet",
      recordingStarted: "Listening...",
      recordingStopped: "I'll help you. Just ask",
      inputPlaceholder: "Please enter your question",
      historyPlaceholder: "Search in messages",
      newChat: "New chat",
      exampleQuestions: [
        "Non-disclosure agreement template",
        "Elements of a lease agreement",
        "Trademark registration",
      ],
      tryAgainTag: "Try again",
      continueTag: "Go on",
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
      helpMessage:
        "Hello! I am ChattyAI, an artificial intelligence voice assistant for professional use. My goal is to help streamline workflows and make them more efficient. \n\nWhen you ask a question with your voice, I give the answer in text. Just click the microphone icon, say your question and I'll try to help. \n\nKeep in mind that I am using OpenAI's ChatGPT technology, so answers may be fictitious and do not reflect my own opinion. But don't worry, I'll always try my best to be helpful! \n\nIf my answer doesn't satisfy you, or if you want more information, just click the \"Try again\" button and I'll try to give a new answer. And if you liked the answer and want to know more, click \"Continue\". \n\nAlso, I have a Request History where you can find our previous conversations if needed. And remember, to save our conversation, it's better to register or log into your account. \n\nLet's get started, ask your question and I'll try to help the best I can!",
    },
    fr: {
      help: "Aider",
      logInButton: "Connexion",
      history: "Histoire",
      emptyHistory: "Aucune demande créée pour le moment",
      recordingStarted: "J'écoute...",
      recordingStopped: "Je vais vous aider. Il suffit de demander",
      inputPlaceholder: "Veuillez entrer votre question",
      historyPlaceholder: "Recherche par historique",
      newChat: "Nouvelle conversation",
      exampleQuestions: [
        "Modèle d'accord de non-divulgation",
        "Éléments d'un contrat de bail",
        "Dépôt de marque",
      ],
      tryAgainTag: "Répondez autrement",
      continueTag: "Continuez",
      textSignUp: "Inscrivez-vous",
      textSignIn: "connectez-vous",
      or: " ou ",
      defaultMessageForNewUser: {
        part_1:
          "Bonjour! Je suis ChattyAI, votre assistant vocal ! Prêt à vous aider pour tout ce qui concerne votre travail.",
        part_2:
          "à votre compte – de cette façon, notre conversation sera enregistrée et rien d'important ne sera perdu !",
        part_3:
          "Je suis heureux d'explorer différentes idées pour vous soutenir. Mais n'oubliez pas que je peux refuser les demandes inappropriées.",
        part_4:
          "Exprimez vos pensées de manière claire et concise et n'hésitez pas à poser des questions de clarification. Commençons! Cliquez sur le microphone et je vous aiderai!",
      },
      helpMessage:
        "Bonjour! Je suis ChattyAI, un assistant vocal d'intelligence artificielle à usage professionnel. Mon objectif est d'aider à rationaliser les flux de travail et à les rendre plus efficaces. \n\nLorsque vous posez une question avec votre voix, je donne la réponse sous forme de texte. Cliquez simplement sur l'icône du microphone, dites votre question et j'essaierai de vous aider. \n\nGardez à l'esprit que j'utilise la technologie ChatGPT d'OpenAI, donc les réponses peuvent être fictives et ne reflètent pas ma propre opinion. Mais ne vous inquiétez pas, je ferai toujours de mon mieux pour vous être utile ! \n\nSi ma réponse ne vous satisfait pas, ou si vous souhaitez plus d'informations, cliquez simplement sur le bouton \"Réessayer\" et j'essaierai de donner une nouvelle réponse. Et si vous avez aimé la réponse et que vous voulez en savoir plus, cliquez sur \"Continuer\". \n\nDe plus, j'ai un historique des demandes où vous pouvez trouver nos conversations précédentes si nécessaire. Et rappelez-vous, pour enregistrer notre conversation, il est préférable de vous inscrire ou de vous connecter à votre compte. \n\nCommençons, posez votre question et j'essaierai de vous aider du mieux que je peux !",
    },
    zh: {
      help: "帮助",
      logInButton: "登录",
      history: "搜索记录",
      emptyHistory: "还没有创建请求",
      recordingStarted: "在听...",
      recordingStopped: "我帮你。 只是问",
      inputPlaceholder: "请输入你的问题",
      historyPlaceholder: "按历史搜索",
      newChat: "新聊天",
      exampleQuestions: ["保密协议模板", "租赁协议的要素", "商标注册"],
      tryAgainTag: "不同地回答",
      continueTag: "继续",
      textSignUp: "请注册",
      textSignIn: "登录",
      or: "或者",
      defaultMessageForNewUser: {
        part_1:
          "你好！ 我是ChattyAI, 你的语音助手! 准备好为你的工作相关的任何事情提供帮助。",
        part_2: " - 这样我们的对话就会被保存，并且不会丢失任何重要的内容！",
        part_3:
          "我很乐意探索不同的想法来支持你。 但请记住，我可以拒绝不适当的请求。",
        part_4:
          "清晰简洁地表达你的想法，并随时提出澄清问题。 开始吧！ 点击麦克风，我来帮忙！",
      },
      helpMessage:
        "你好！ 我是ChattyAI, 一个专业用途的人工智能语音助手。 我的目标是帮助简化工作流程并提高其效率。\n\n当你用声音提问时, 我会用文字给出答案。 只需单击麦克风图标，说出你的问题，我会尽力提供帮助。 \n\n请记住, 我正在使用 OpenAI 的 ChatGPT 技术，因此答案可能是虚构的，并不反映我自己的观点。 不过别担心，我会尽力帮助你的！ \n\n如果我的回答不能让你满意, 或者你想了解更多信息，只需单击“重试”按钮，我将尝试给出新的答案。 如果你喜欢这个答案并想了解更多信息，请单击“继续”  \n\n另外, 我有一个请求历史记录，如果需要，你可以在其中找到我们之前的对话。 请记住，要保存我们的对话，最好注册或登录你的帐户。 \n\n让我们开始吧,提出你的问题,我会尽力提供帮助！",
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

export const currentLanguageSelector = (
  state: RootState
): RootState["language"]["currentLanguage"] => state.language.currentLanguage;

export const languageSelector = (state: RootState): LanguageState["language"] =>
  state.language.language;
