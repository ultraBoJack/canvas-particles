/* eslint-disable */
export class Circle {
  constructor (x, y, canvasWidth, canvasHeight) {
    this._mx = getRandomIntClusive(5, 10) / 100 * getRandom1()
    this._my = getRandomIntClusive(5, 10) / 100 * getRandom1()
    let randomMin = 2
    let randomMax = 6
    this.r = getRandomIntClusive(randomMin, randomMax)
    if (x <= randomMax) {
      this.x = randomMax
    } else if (x > randomMax && x < canvasWidth - randomMax) {
      this.x = x
    } else {
      this.x = canvasWidth - randomMax
    }
    if (y <= randomMax) {
      this.y = randomMax
    } else if (y > randomMax && y < canvasHeight - randomMax) {
      this.y = y
    } else {
      this.y = canvasHeight - randomMax
    }
  }
  drawCircle (ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    ctx.closePath()
    let fill1 = parseInt((Math.random() * 255))
    let fill2 = parseInt((Math.random() * 255))
    let fill3 = parseInt((Math.random() * 255))
    let fill4 = Math.random()
    ctx.fillStyle = `rgba(${fill1}, ${fill2}, ${fill3}, ${fill4})`
    // ctx.fillStyle = 'rgba(255, 158, 15, 1)'
    ctx.fill()
  }
  drawLine (ctx, _circle) {
    let dx = this.x - _circle.x
    let dy = this.y - _circle.y
    let d = Math.sqrt(dx * dx + dy * dy)
    let drawLineDistance = 100
    if (d > drawLineDistance) {
      return
    } else if (d >= (this.r + _circle.r) && d <= drawLineDistance ) {
      ctx.beginPath()
      ctx.moveTo(this.x, this.y)
      // ctx.quadraticCurveTo(Math.min(this.x, _circle.x), Math.max(this.y, _circle.y), _circle.x + 0, _circle.y + 0)
      ctx.lineTo(_circle.x, _circle.y)
      // ctx.closePath()
      let stroke1 = parseInt((Math.random() * 255))
      let stroke2 = parseInt((Math.random() * 255))
      let stroke3 = parseInt((Math.random() * 255))
      let stroke4 = Math.random()
      ctx.strokeStyle = `rgba(${stroke1}, ${stroke2}, ${stroke3}, ${stroke4})`
      // ctx.strokeStyle = 'rgba(255,151,15,1)'
      ctx.stroke()
    } else if (d < (this.r + _circle.r)) {
      this._mx *= (-1)
      this._my *= (-1)
      // if (Math.abs(this._mx) < 0.1) this._mx *= 10
      // if (Math.abs(this._my) < 0.1) this._my *= 10
      // this.r *= 0.9
      // if (this.r < 3) this.r = 3
      _circle._mx *= (-1)
      _circle._my *= (-1)
      // if (Math.abs(_circle._mx) < 0.1) _circle._mx *= 10
      // if (Math.abs(_circle._my) < 0.1) _circle._my *= 10
      // _circle.r *= 0.9
      // if (_circle.r < 3) _circle.r = 3
    }
  }
  move (w, h) {
    this._mx = (this.x < w - this.r && this.x > 0 + this.r) ? this._mx : (-this._mx)
    this._my = (this.y < h - this.r && this.y > 0 + this.r) ? this._my : (-this._my)
    this.x += this._mx
    this.y += this._my
  }
}
export class CurrentCircle extends Circle {
  constructor (x, y, canvasWidth, canvasHeight) {
    super(x, y, canvasWidth, canvasHeight)
  }
  drawCircle (ctx) {
    ctx.beginPath()
    this.r = 2
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fillStyle = 'rgba(255, 158, 15, 1)'
    ctx.fill()
  }
}

function getRandomIntClusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandom1() {
  let ran = Math.random() > 0.5 ? 1 : -1 
  return ran
}
