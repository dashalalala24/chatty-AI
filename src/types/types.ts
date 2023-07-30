import { ReactNode, SyntheticEvent } from "react";

export interface IMessage {
  text: string | ReactNode;
  owner: "user" | "system";
  createdAt: string;
  isLastMessage?: boolean;
}

export interface IMessageLoader {
  owner: "user" | "system";
}

export interface ITag {
  text: string;
  answer: string;
}

export interface WaveOptions {
  start: string;
  stop: string;
  lineWidth: number;
  xSpeed: number;
  amplitude: number;
  offset: number;
}

export interface AnimationProps {
  inMin: number;
  inMax: number;
  outMin: number;
  outMax: number;
}

export interface CanvasObject {
  ele: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;
  width: number;
  height: number;
  resizeCallback: (() => void) | null;
  init: () => CanvasRenderingContext2D | null;
  onResize: (callback: () => void) => void;
  resize: () => void;
  run: (callback: (ctx: CanvasRenderingContext2D) => void) => void;
}

export interface IRequestMessage {
  text: string;
}

export interface IRecyclebinButton {
  onClick?: (e: SyntheticEvent) => void;
}

export interface IChatMessage {
  text: string;
  owner: "user" | "system";
  createdAt: string;
}

export interface IChat {
  status: "idle" | "fulfilled" | "userPending" | "aiPending" | "rejected";
  error: string | undefined;
  chatMessages: IChatMessage[];
}

export interface IDataMessage {
  role: "user" | "system";
  content: string;
}

export interface IDefaultMessage {
  [key: string]: string;
}

export interface textsToTranslate {
  help: string;
  logInButton: string;
  history: string;
  emptyHistory: string;
  recordingStarted: string;
  recordingStopped: string;
  inputPlaceholder: string;
  historyPlaceholder: string;
  newChat: string;
  exampleQuestions: string[];
  tryAgainTag: string;
  continueTag: string;
  textSignUp: string;
  textSignIn: string;
  or: string;
  defaultMessageForNewUser: IDefaultMessage;
  helpMessage: string;
}

export interface LanguageState {
  currentLanguage: "ru" | "en" | "fr" | "zh";
  language: {
    ru: textsToTranslate;
    en: textsToTranslate;
    fr: textsToTranslate;
    zh: textsToTranslate;
  };
}
