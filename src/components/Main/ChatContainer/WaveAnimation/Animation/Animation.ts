import { useEffect } from "react";

export interface WaveOptions {
  start: string;
  stop: string;
  lineWidth: number;
  xSpeed: number;
  amplitude: number;
  offset: number;
}

export interface AnimationProps {
  inMin: number;
  inMax: number;
  outMin: number;
  outMax: number;
}

export interface CanvasObject {
  ele: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;
  width: number;
  height: number;
  resizeCallback: (() => void) | null;
  init: () => CanvasRenderingContext2D | null;
  onResize: (callback: () => void) => void;
  resize: () => void;
  run: (callback: (ctx: CanvasRenderingContext2D) => void) => void;
}

function Animation({ inMin, inMax, outMin, outMax }: AnimationProps) {
  function valueMapping(
    x: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
  ) {
    return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }

  const canvas: CanvasObject = {
    ele: document.createElement("canvas"),
    ctx: null,
    width: 0,
    height: 0,
    resizeCallback: null,
    init() {
      this.ele.id = "canvas";
      this.ele.setAttribute("class", "wave__canvas");
      const waveSection = document.getElementById("wave__section");
      if (waveSection) {
        waveSection.prepend(this.ele);
      }
      this.resize();
      window.addEventListener("resize", () => this.resize(), false);
      this.ctx = this.ele.getContext("2d");
      return this.ctx;
    },
    onResize(callback) {
      this.resizeCallback = callback;
    },
    resize() {
      this.width = this.ele.width = this.ele.offsetWidth;
      this.height = this.ele.height = this.ele.offsetHeight;
      if (this.resizeCallback) {
        this.resizeCallback();
      }
    },
    run(callback) {
      requestAnimationFrame(() => {
        this.run(callback);
      });
      if (this.ctx) {
        callback(this.ctx);
      }
    },
  };

  useEffect(() => {
    const ctx = canvas.init();

    class Wave {
      canvas: CanvasObject;
      options: WaveOptions;
      xMove: number;
      width: number = 0;
      height: number = 0;
      amplitude: number = 0;

      constructor(canvas: CanvasObject, options: WaveOptions) {
        this.canvas = canvas;
        this.options = options;
        this.xMove = this.options.offset;
        this.resize();
      }

      resize() {
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.amplitude = this.canvas.height * this.options.amplitude;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        this.xMove += this.options.xSpeed;
        ctx.moveTo(0, this.height / 2);
        var grad = ctx.createLinearGradient(0, 0, this.width, 0);
        grad.addColorStop(0, this.options.start);
        grad.addColorStop(1, this.options.stop);
        ctx.strokeStyle = grad;
        ctx.lineWidth = this.options.lineWidth;
        for (let x = 0; x < this.width; x++) {
          const radians = (x / this.width) * Math.PI * 2;
          const scale = (Math.sin(radians - Math.PI * 0.5) + 1) * 0.5;
          const y =
            Math.sin(x * 0.02 + this.xMove) * this.amplitude * scale +
            this.height / 2;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.closePath();
      }
    }

    const gradients: [string, string][] = [
      ["#56CCF2", "#2F80ED"],
      ["#F2994A", "#F2C94C"],
      ["#4568DC", "#B06AB3"],
      ["#0fd850", "#f9f047"],
      ["#007adf", "#00ecbc"],
      ["#B6CEE8", "#F578DC"],
      ["#9be15d", "#00e3ae"],
    ];

    let waves: Wave[] = [];

    const init = () => {
      waves = [];
      for (let i = 0; i < 20; i++) {
        const [start, stop] =
          gradients[Math.floor(Math.random() * gradients.length)];
        waves.push(
          new Wave(canvas, {
            start,
            stop,
            lineWidth: 1,
            xSpeed: valueMapping(Math.random(), inMin, inMax, outMin, outMax),
            amplitude: valueMapping(Math.random(), 0, 1, 0.05, 0.4),
            offset: Math.random() * 100,
          })
        );
      }
    };

    init();

    canvas.run((ctx) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      waves.forEach((wave) => {
        wave.draw(ctx);
      });
    });

    canvas.onResize(() => {
      init();
    });

    return () => {
      // Очищаем ресурсы, если компонент размонтируется
      waves = [];
      canvas.ele.remove();
    };
  }, [inMin, inMax, outMin, outMax]);

  // useEffect(() => {
  //   // Функция для пересчета значений и обновления анимации

  //   function updateAnimation() {
  //     // Пересчитываем значения
  //     const xSpeed = valueMapping(Math.random(), inMin, inMax, outMin, outMax);
  //     const amplitude = valueMapping(Math.random(), 0, 1, 0.05, 0.4);

  //     // Обновляем значения в каждой анимации
  //     waves.forEach((wave) => {
  //       wave.options.xSpeed = xSpeed;
  //       wave.options.amplitude = amplitude;
  //       wave.resize();
  //     });
  //   }

  //   // Вызываем функцию для пересчета значений и обновления анимации при изменении пропсов
  //   updateAnimation();
  // }, [inMin, inMax, outMin, outMax]);

  return null;
}

export default Animation;
