<template>
  <div class="progress-circle-copy1">
    <div class="canvas-wrapper">
      <canvas id="canvas" ref="canvas" width="2500" height="2500"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.drawCircle()
  },
  methods: {
    drawCircle () {
      let canvas = this.$refs.canvas
      let canvasWidth = canvas.width
      let canvasHeight = canvas.height
      let ctx = canvas.getContext('2d')
      let circleCenterX = 200
      let circleCenterY = 600
      let circleRadius = 12
      console.log(circleRadius)
      let stepX = 16
      let stepY = -16
      let gravity = 2
      ctx.fillStyle = 'rgba(8, 51, 25, 1)'
      let draw = function () {
        circleCenterX += stepX
        circleCenterY += stepY
        stepY += gravity
        if (circleCenterY > canvasHeight * 0.75) {
          stepX *= 0.75
          stepY *= (-0.6)
          circleCenterY = canvasHeight * 0.75
        }
        if ((circleCenterX >= circleRadius && circleCenterX <= canvasWidth - circleRadius) && (circleCenterY >= circleRadius && circleCenterY <= canvasHeight - circleRadius)) {
          ctx.clearRect(0, 0, canvasWidth, canvasHeight)
          ctx.beginPath()
          ctx.arc(circleCenterX, circleCenterY, circleRadius, -Math.PI / 2, Math.PI / 2 * 3)
          ctx.fill()
        }
      }
      setInterval(() => {
        draw()
      }, 16.7)
    }
  }
}
</script>

<style scoped>
.progress-circle-copy1{
  width: 100%;
  height: 100%
}
.canvas-wrapper{
  position: relative;
  width: 100%;
  height: 100%;
}
#canvas{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
