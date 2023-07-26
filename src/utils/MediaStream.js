import animation from "./Animation";

let chunks = [];
let mediaRecorder = null;
let audioBlob = null;

function mediaRecorderDataAvailable(evt) {
  chunks.push(evt.data);
}

function mediaRecorderStop() {
  // console.log("data available after MediaRecorder.stop() called.");
  const audio = document.createElement('audio');

  // audioBlob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
  audioBlob = new Blob(chunks, { type: 'audio/mp3' });
  const audioURL = window.URL.createObjectURL(audioBlob);
  audio.src = audioURL;
  // console.log("recorder stopped");

  mediaRecorder = null;
  chunks = [];
  animation(0, 100, -0.0005, -0.0002);
  // document.getElementById('canvas').remove();
}

export default async function record() {

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert('Your browser does not support recording!');
    return;
  }

  if (!mediaRecorder) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      })
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      animation(0, 1, -0.05, -0.2);
      // console.log(mediaRecorder.state);
      // console.log("recorder started");
      mediaRecorder.ondataavailable = mediaRecorderDataAvailable;
      mediaRecorder.onstop = mediaRecorderStop;
    } catch (err) {
      alert(`The following error occurred: ${err}`);
    }
  } else {
    mediaRecorder.stop();
  }
};
