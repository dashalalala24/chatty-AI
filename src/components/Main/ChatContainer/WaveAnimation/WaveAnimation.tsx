import "./WaveAnimation.css";
import Animation from "./Animation/Animation";
import Record from "../Record/Record";
import { useAppSelector } from "../../../../services/redux/reduxHooks";
import { isRecordingSelector } from "../../../../services/redux/slices/isRecording/isRecording";

const WaveAnimation = () => {
  const isRecording = useAppSelector(isRecordingSelector);

  return (
    <div className="wave__section" id="wave__section">
      <div
        className={`wave__animation wave__still-animation ${
          isRecording ? "" : "wave__still-animation_visible"
        } `}
        id="wave__still-animation"
      >
        <Animation
          constriction={5000}
          amplitudeY={0.001}
          amplitudeX={0.1}
          id="wave__still-animation"
        />
      </div>
      <div
        className={`wave__animation wave__moving-animation ${
          isRecording ? "wave__moving-animation_visible" : ""
        } `}
        id="wave__moving-animation"
      >
        <Animation
          constriction={1}
          amplitudeY={0.05}
          amplitudeX={0.4}
          id="wave__moving-animation"
        />
      </div>
      <div className="wave__record">
        <Record />
      </div>
    </div>
  );
};

export default WaveAnimation;
