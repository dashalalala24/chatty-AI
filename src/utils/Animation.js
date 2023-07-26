// export default function animation(inMin, inMax, outMin, outMax) {
//   function valueMapping (x, inMin, inMax, outMin, outMax) {
//     return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
//   }
//   const canvas = {
//     init () {
//       this.ele = document.createElement('canvas')
//       this.ele.id = 'canvas'
//       this.ele.setAttribute('class', 'wave__canvas')
//       document.getElementById('wave__record-block').prepend(this.ele)
//       this.resize()
//       window.addEventListener('resize', () => this.resize(), false)
//       this.ctx = this.ele.getContext('2d')
//       return this.ctx
//     },
//     onResize (callback) {
//       this.resizeCallback = callback
//     },
//     resize () {
//       this.width = this.ele.width = this.ele.offsetWidth
//       this.height = this.ele.height = this.ele.offsetHeight
//       this.resizeCallback && this.resizeCallback()
//     },
//     run (callback) {
//       requestAnimationFrame(() => {
//         this.run(callback)
//       })
//       callback(this.ctx)
//     }
//   }

//   const ctx = canvas.init()

//   class Wave {
//     constructor (canvans, options) {
//       this.canvas = canvas
//       this.options = options
//       this.xMove = this.options.offset
//       this.xSpeed = this.options.xSpeed
//       this.resize()
//     }
//     resize () {
//       this.width = canvas.width
//       this.height = canvas.height
//       this.amplitude = this.canvas.height * this.options.amplitude
//     }

//     draw (ctx) {
//       ctx.beginPath()
//       this.xMove += this.xSpeed
//       ctx.moveTo(0, this.height / 2)
//       var grad = ctx.createLinearGradient(0, 0, this.width, 0);
//       grad.addColorStop(0, this.options.start);
//       grad.addColorStop(1, this.options.stop);
//       ctx.strokeStyle = grad
//       ctx.lineWidth = this.options.lineWidth
//       for (let x = 0; x < this.width; x++) {
//         const radians = x / this.width * Math.PI * 2
//         const scale = (Math.sin(radians - Math.PI * 0.5) + 1) * 0.5
//         const y = Math.sin(x * 0.02 + this.xMove) * this.amplitude * scale + this.height / 2
//         ctx.lineTo(x, y)
//       }
//       ctx.stroke()
//       ctx.closePath()
//     }
//   }

//   const gradients = [
//     ['#56CCF2', '#2F80ED'],
//     ['#F2994A', '#F2C94C'],
//     ['#4568DC', '#B06AB3'],
//     ['#0fd850', '#f9f047'],
//     ['#007adf', '#00ecbc'],
//     ['#B6CEE8', '#F578DC'],
//     ['#9be15d', '#00e3ae']
//   ]

//   let waves = []

//   const init = () => {
//     waves = []
//     for (let i = 0; i < 20; i++) {
//       const [start, stop] = gradients[Math.floor(Math.random() * gradients.length)]
//       waves.push(new Wave(canvas, {
//         start,
//         stop,
//         lineWidth: 1,
//         xSpeed: valueMapping(Math.random(), inMin, inMax, outMin, outMax),
//         amplitude: valueMapping(Math.random(), 0, 1, 0.05, 0.4),
//         offset: Math.random() * 100
//       }))
//     }
//   }

//   init()

//   canvas.run(ctx => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     waves.forEach(wave => {
//       wave.draw(ctx)
//     })
//   })

//   canvas.onResize(() => {
//     init()
//   })

// }

function Animation({inMin, inMax, outMin, outMax}) {

  function valueMapping (x, inMin, inMax, outMin, outMax) {
    return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }

  const canvas = {
    init () {
      this.ele = document.createElement('canvas')
      this.ele.id = 'canvas'
      this.ele.setAttribute('class', 'wave__canvas')
      document.getElementById('wave__record-block')?.prepend(this.ele)
      this.resize()
      window.addEventListener('resize', () => this.resize(), false)
      this.ctx = this.ele.getContext('2d')
      return this.ctx
    },
    onResize (callback) {
      this.resizeCallback = callback
    },
    resize () {
      this.width = this.ele.width = this.ele.offsetWidth
      this.height = this.ele.height = this.ele.offsetHeight
      this.resizeCallback && this.resizeCallback()
    },
    run (callback) {
      requestAnimationFrame(() => {
        this.run(callback)
      })
      callback(this.ctx)
    }
  }

  const ctx = canvas.init()

  class Wave {
    constructor (canvas, options) {
      this.canvas = canvas
      this.options = options
      this.xMove = this.options.offset
      this.xSpeed = this.options.xSpeed
      this.resize()
    }
    resize () {
      this.width = canvas.width
      this.height = canvas.height
      this.amplitude = this.canvas.height * this.options.amplitude
    }

    draw (ctx) {
      ctx.beginPath()
      this.xMove += this.xSpeed
      ctx.moveTo(0, this.height / 2)
      var grad = ctx.createLinearGradient(0, 0, this.width, 0);
      grad.addColorStop(0, this.options.start);
      grad.addColorStop(1, this.options.stop);
      ctx.strokeStyle = grad
      ctx.lineWidth = this.options.lineWidth
      for (let x = 0; x < this.width; x++) {
        const radians = x / this.width * Math.PI * 2
        const scale = (Math.sin(radians - Math.PI * 0.5) + 1) * 0.5
        const y = Math.sin(x * 0.02 + this.xMove) * this.amplitude * scale + this.height / 2
        ctx.lineTo(x, y)
      }
      ctx.stroke()
      ctx.closePath()
    }
  }

  const gradients = [
    ['#56CCF2', '#2F80ED'],
    ['#F2994A', '#F2C94C'],
    ['#4568DC', '#B06AB3'],
    ['#0fd850', '#f9f047'],
    ['#007adf', '#00ecbc'],
    ['#B6CEE8', '#F578DC'],
    ['#9be15d', '#00e3ae']
  ]

  let waves = []

  const init = () => {
    waves = []
    for (let i = 0; i < 20; i++) {
      const [start, stop] = gradients[Math.floor(Math.random() * gradients.length)]
      waves.push(new Wave(canvas, {
        start,
        stop,
        lineWidth: 1,
        xSpeed: valueMapping(Math.random(), inMin, inMax, outMin, outMax),
        amplitude: valueMapping(Math.random(), 0, 1, 0.05, 0.4),
        offset: Math.random() * 100
      }))
    }
  }

  init()

  canvas.run(ctx => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    waves.forEach(wave => {
      wave.draw(ctx)
    })
  })

  canvas.onResize(() => {
    init()
  })
// console.log(canvas)
// console.log(typeof canvas.ele)

  return (
    <div></div>
  )
}

export default Animation;
