import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IChatMessage {
  text: string;
  owner: "user" | "ai";
  createdAt: string;
}

export interface IChat {
  status: "idle" | "success" | "loading" | "failed";
  error: string | undefined;
  chat: IChatMessage[];
}

const initialState: IChat = {
  status: "idle",
  error: undefined,
  chat: [
    // {
    //   text: "",
    //   owner: "",
    //   createdAt: "",
    // },
  ],
};

const chatSlice = createSlice({
  name: "@@chat",
  initialState,
  reducers: {
    resetChat: () => initialState,
    addMessage: (state, action) => {
      state.chat = [...state.chat, action.payload];
    },
  },
});

export const { resetChat, addMessage } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
