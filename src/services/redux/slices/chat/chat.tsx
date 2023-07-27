import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGetAIAnswer } from "./chatAPI";

export interface IChatMessage {
  text: string;
  owner: "user" | "ai";
  createdAt: string;
}

export interface IChat {
  status: "idle" | "fulfilled" | "pending" | "rejected";
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

export const getAnswer = createAsyncThunk(
  "order/fetchGetAIAnswer",
  async (data: string) => {
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
    addMessage: (state, action) => {
      state.chatMessages = [...state.chatMessages, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAnswer.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAnswer.fulfilled, (state, action) => {
        const date = new Date().toLocaleString();
        console.log("date", date);
        state.status = "fulfilled";
        // console.log("payload", action.payload);
        state.chatMessages.push({
          text: action.payload,
          owner: "ai",
          createdAt: date,
        });
      })
      .addCase(getAnswer.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const { resetChat, addMessage } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
