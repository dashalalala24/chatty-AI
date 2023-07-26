import { FC, useContext } from "react";
import "./WaveAnimation.css";
import { CurrentUserContext } from "../../../../contexts/CurrentUserContext";
import record from "../../../../utils/MediaStream";
import Animation from "../../../../utils/Animation";

const WaveAnimation: FC = () => {
  const isRecording = useContext(CurrentUserContext);

  return (
    <div className="wave__section">
      <div className="wave__record-block" id="wave__record-block">
        <Animation inMin={0} inMax={100} outMin={-0.0005} outMax={-0.0002} />
        <div className="wave__record">
          <button
            className="wave__record-button"
            type="button"
            onClick={() => {
              isRecording ? record() : record();
            }}
            id="record-button"
          />
          <h2 className="wave__record-subtitle">
            Помогу в работе. Только спроси
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WaveAnimation;
