import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const isRecordingSlice = createSlice({
  name: "@@isRecording",
  initialState: false,
  reducers: {
    toggleRecordingStatus: (_, action: PayloadAction<boolean>) =>
      action.payload,
  },
});

export const { toggleRecordingStatus } = isRecordingSlice.actions;

export const isRecordingReducer = isRecordingSlice.reducer;
