import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGetAIAnswer } from "./chatAPI";
import { getTranscriptionDone } from "./chatAPI";
import { cleanTranscriprion } from "../../../../utils/utils";
import { RootState } from "../../store";

export interface IChatMessage {
  text: string;
  owner: "user" | "ai";
  createdAt: string;
}

export interface IChat {
  status: "idle" | "fulfilled" | "userPending" | "aiPending" | "rejected";
  error: string | undefined;
  chatMessages: IChatMessage[];
}

const initialState: IChat = {
  status: "idle",
  error: undefined,
  chatMessages: [],
};

export const getVoiceToText = createAsyncThunk(
  "@@chat/getTranscriptionDone",
  async (taskId: string) => {
    const response: any = await getTranscriptionDone(taskId);
    return cleanTranscriprion(response.result);
  }
);

export const getAnswer = createAsyncThunk(
  "@@chat/fetchGetAIAnswer",
  async (data: string | unknown) => {
    const response = await fetchGetAIAnswer(data);
    return response.choices[0].message.content;
  }
);

const chatSlice = createSlice({
  name: "@@chat",
  initialState,
  reducers: {
    resetChat: () => initialState,
    addTextQuestion: (state, action: PayloadAction<IChatMessage>) => {
      state.chatMessages = [...state.chatMessages, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getVoiceToText.fulfilled,
        (state, action: PayloadAction<string>) => {
          const date = new Date().toLocaleString();
          state.status = "fulfilled";
          state.chatMessages.push({
            text: action.payload,
            owner: "user",
            createdAt: date,
          });
        }
      )
      .addCase(getAnswer.fulfilled, (state, action: PayloadAction<string>) => {
        const date = new Date().toLocaleString();
        state.status = "fulfilled";
        state.chatMessages.push({
          text: action.payload,
          owner: "ai",
          createdAt: date,
        });
      })
      .addCase(getVoiceToText.pending, (state) => {
        state.status = "userPending";
        state.error = undefined;
      })
      .addCase(getAnswer.pending, (state) => {
        state.status = "aiPending";
        state.error = undefined;
      })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.status = "rejected";
          state.error = action.payload || action.meta.error;
        }
      );
  },
});

export const { resetChat, addTextQuestion } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;

export const messagesSelector = (state: RootState): IChat["chatMessages"] =>
  state.chat.chatMessages;

export const chatStatusSelector = (
  state: RootState
): RootState["chat"]["status"] => state.chat.status;
