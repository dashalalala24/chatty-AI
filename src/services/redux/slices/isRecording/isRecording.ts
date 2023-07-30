import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

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

export const isRecordingSelector = (state: RootState): boolean =>
  state.isRecording;
