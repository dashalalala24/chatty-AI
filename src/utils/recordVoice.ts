import MicRecorder from "mic-recorder-to-mp3";
import { SyntheticEvent } from "react";

const recorder = new MicRecorder({
  bitRate: 128,
});

export function startRecording() {
  recorder
    .start()
    .then(() => {
      console.log("Запись началась");
    })
    .catch((e: SyntheticEvent) => {
      console.error(e);
    });
}

export async function stopRecording() {
  return recorder
    .stop()
    .getMp3()
    .then(([buffer, blob]: any) => {
      const file = new File(buffer, "userVoiceQuestion.mp3", {
        type: blob.type,
      });
      return file;
    })
    .catch(() => {
      console.log("Не удалось сделать запись голоса");
    });
}
