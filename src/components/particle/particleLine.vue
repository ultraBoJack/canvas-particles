<template>
  <div class="progress-circle-copy1">
    <div class="canvas-wrapper">
      <canvas id="canvas" ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import {Circle, CurrentCircle} from './particle'

let doc = document.documentElement || document.body
let docWidth = doc.clientWidth
let docHeight = doc.clientHeight
console.log(docWidth, docHeight)
let current_circle = new CurrentCircle(docWidth / 2, docHeight / 2)
let circlesOriginal = []

window.onmousemove = function (e) {
  e = e || window.event
  current_circle.x = e.clientX
  current_circle.y = e.clientY
}
window.onmouseout = function (e) {
  e = e || window.event
  current_circle.x = null
  current_circle.y = null
}
window.onclick = function (e) {
  for ( let i = 0; i < 4; i++) {
    if (i === 0) {
      circlesOriginal.push(new Circle(current_circle.x + 25, current_circle.y + 25, docWidth, docHeight))
      circlesOriginal[circlesOriginal.length - 1]._mx = Math.random()
      circlesOriginal[circlesOriginal.length - 1]._my = Math.random()
    } else if (i === 1) {
      circlesOriginal.push(new Circle(current_circle.x + 25, current_circle.y - 25, docWidth, docHeight))
      circlesOriginal[circlesOriginal.length - 1]._mx = Math.random()
      circlesOriginal[circlesOriginal.length - 1]._my = -Math.random()
    }
    if (i === 2) {
      circlesOriginal.push(new Circle(current_circle.x - 25, current_circle.y + 25, docWidth, docHeight))
      circlesOriginal[circlesOriginal.length - 1]._mx = -Math.random()
      circlesOriginal[circlesOriginal.length - 1]._my = Math.random()
    }
    if (i === 3) {
      circlesOriginal.push(new Circle(current_circle.x - 25, current_circle.y - 25, docWidth, docHeight))
      circlesOriginal[circlesOriginal.length - 1]._mx = -Math.random()
      circlesOriginal[circlesOriginal.length - 1]._my = -Math.random()
    }
  }
}
window.onresize = function (e) {

}

export default {
  data () {
    return {
      
    }
  },
  mounted () {
    this.drawCircleMethod()
  },
  methods: {
    drawCircleMethod () {
      let canvas = this.$refs.canvas
      let canvasWidth = canvas.width = docWidth
      let canvasHeight = canvas.height = docHeight
      let ctx = canvas.getContext('2d')
      let density = 12100
      let particleNum = Math.round(canvasWidth * canvasHeight / density)

      for (let i = 0; i < particleNum; i++) {
        circlesOriginal.push(new Circle(Math.random() * canvasWidth, Math.random() * canvasHeight, canvasWidth, canvasHeight))
      }
      for ( let i = 0; i < circlesOriginal.length; i++) {
        for (let j = i + 1; j < circlesOriginal.length; j++) {
          let dx = circlesOriginal[i].x - circlesOriginal[j].x
          let dy = circlesOriginal[i].y - circlesOriginal[j].y
          let d = Math.sqrt(dx * dx + dy * dy).toFixed(0)
          let twoRadius = circlesOriginal[i].r + circlesOriginal[j].r
          if (d <= twoRadius) {
            circlesOriginal.splice(j, 1)
            // circlesOriginal.push(new Circle(Math.random() * canvasWidth, Math.random() * canvasHeight, canvasWidth, canvasHeight))
          }
        }
      }

      let draw = function () {
        // ctx.clearRect(0, 0, canvasWidth, canvasHeight)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.25)'
        ctx.fillRect(0,0,canvas.width,canvas.height)
        if (circlesOriginal.length >= particleNum * 1.5) circlesOriginal.splice(particleNum - 1)
        for (let i = 0; i < circlesOriginal.length; i++) {
          circlesOriginal[i].move(canvasWidth, canvasHeight)
          circlesOriginal[i].drawCircle(ctx)
          for (let j = i + 1; j < circlesOriginal.length; j++) {
            circlesOriginal[i].drawLine(ctx, circlesOriginal[j])
          }
        }
        if (current_circle.x) {
          current_circle.drawCircle(ctx)
          for (let k = 1; k < circlesOriginal.length; k++) {
            current_circle.drawLine(ctx, circlesOriginal[k])
          }
        }
        requestAnimationFrame(draw)
      }
      requestAnimationFrame(draw)
      // setInterval(() => {
      //   draw()
      // }, 16.7)
    },
  }        
}
</script>

<style scoped>
#canvas{
  position: fixed;
  top: 0;
  left: 0;
}
</style>
