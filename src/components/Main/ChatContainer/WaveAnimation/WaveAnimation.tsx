import { useEffect, useRef, useState } from "react";

import "./WaveAnimation.css";
import Animation from "./Animation/Animation";
import Record from "../Record/Record";
import ReactDOM, { render } from "react-dom";
import { useAppSelector } from "../../../../services/redux/reduxHooks";

const WaveAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerNode = containerRef.current;
    const wavesContainer = document.getElementById("wave__animation");
    if (containerNode && wavesContainer) {
      render(
        <Animation inMin={0} inMax={1} outMin={-0.05} outMax={-0.02} />,
        wavesContainer
      );
    }
  }, []);

  // const isRecording = useAppSelector((state) => state.isRecording);
  // const containerRef = useRef(null);
  // const animationRef = useRef<HTMLDivElement | null>(null);
  // const [animationProps, setAnimationProps] = useState({
  //   inMin: 0,
  //   inMax: 100,
  //   outMin: -0.0005,
  //   outMax: -0.0002,
  //   // Другие пропсы, которые вы хотите передать в Animation
  // });

  // const [animations, setAnimations] = useState<React.ReactNode[]>([]);

  // // Пример изменения пропсов в зависимости от стейта
  // useEffect(() => {
  //   // Измените пропсы в зависимости от стейта
  //   setAnimationProps({
  //     inMin: 0,
  //     inMax: 1,
  //     outMin: -0.05,
  //     outMax: -0.02,
  //     // Другие пропсы в зависимости от стейта
  //   });
  // }, [isRecording]);

  // useEffect(() => {
  //   const containerNode = containerRef.current;
  //   const wavesContainer = document.getElementById("wave__animation");
  //   if (containerNode && wavesContainer) {
  //     // Создаем анимацию только один раз при монтировании
  //     animationRef.current = document.createElement("div");
  //     wavesContainer.appendChild(animationRef.current);

  //     // Обновляем анимацию с текущими значениями пропсов
  //     updateAnimation();
  //   }

  //   // Функция для обновления анимации с текущими значениями пропсов
  //   function updateAnimation() {
  //     ReactDOM.render(<Animation {...animationProps} />, animationRef.current);
  //   }

  //   return () => {
  //     // Удаляем анимацию при размонтировании компонента
  //     if (animationRef.current) {
  //       ReactDOM.unmountComponentAtNode(animationRef.current);
  //       animationRef.current.remove();
  //     }
  //   };
  // }, [animationProps]);

  return (
    <div className="wave__section" id="wave__section" ref={containerRef}>
      <div className="wave__animation" id="wave__animation">
        {/* {animations} */}
      </div>
      <div className="wave__record" id="wave__record">
        <Record />
      </div>
    </div>
  );
};

export default WaveAnimation;
