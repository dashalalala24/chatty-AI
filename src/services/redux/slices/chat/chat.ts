import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGetAIAnswer } from "./chatAPI";
import { getTranscriptionDone } from "./chatAPI";
import { cleanTranscriprion } from "../../../../utils/utils";

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
  chatMessages: [
    // {
    //   text: "",
    //   owner: "",
    //   createdAt: "",
    // },
  ],
};

export const getVoiceToText = createAsyncThunk(
  "chat/getTranscriptionDone",
  async (taskId: string) => {
    const response: any = await getTranscriptionDone(taskId);
    console.log("getVoiceToText response.data", response.result);
    return cleanTranscriprion(response.result);
  }
);

export const getAnswer = createAsyncThunk(
  "chat/fetchGetAIAnswer",
  async (data: string | unknown) => {
    const response = await fetchGetAIAnswer(data);
    console.log(response.choices[0].message.content);
    return response.choices[0].message.content;
  }
);

const chatSlice = createSlice({
  name: "@@chat",
  initialState,
  reducers: {
    resetChat: () => initialState,
    addInputQuestion: (state, action) => {
      state.chatMessages = [...state.chatMessages, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVoiceToText.fulfilled, (state, action) => {
        const date = new Date().toLocaleString();
        console.log("date", date);
        state.status = "fulfilled";
        state.chatMessages.push({
          text: action.payload,
          owner: "user",
          createdAt: date,
        });
      })
      .addCase(getAnswer.fulfilled, (state, action) => {
        const date = new Date().toLocaleString();
        console.log("date", date);
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

export const { resetChat, addInputQuestion } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
