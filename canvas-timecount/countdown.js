
var endTime = new Date(2018, 10, 18, 18, 42, 52)
var curShowtimeSeconds = 0
var balls = []
const colors = ['#33b5e5', '#0099cc', '#aa66cc', '#9933cc', '#99cc00', '#ff4444']


window.onload = function () {

  WINDOW_WIDTH=document.body.clientWidth
  WINDOW_HEIGHT=document.body.clientHeight
  MARGIN_LEFT=Math.round(WINDOW_WIDTH/10)
  RADIUS=Math.round(WINDOW_WIDTH*4/5/108)-1
  MARGIN_TOP=Math.round(WINDOW_HEIGHT/5)

  var canvas = document.getElementById('canvas')
  var context = canvas.getContext('2d')

  canvas.width = WINDOW_WIDTH
  canvas.height = WINDOW_HEIGHT

  curShowtimeSeconds = getCurrentShowTimeSeconds()
  setInterval(() => {
    render(context)
    update();
  }, 50);
}

function update() {
  var nextShowTimeSeconds = getCurrentShowTimeSeconds();
  var nextHours = parseInt(nextShowTimeSeconds / 3600)
  var nextMinutes = parseInt((nextShowTimeSeconds - nextHours * 3600) / 60)
  var nextSeconds = parseInt(nextShowTimeSeconds % 60)

  var curHours = parseInt(curShowtimeSeconds / 3600)
  var curMinutes = parseInt((curShowtimeSeconds - curHours * 3600) / 60)
  var curSeconds = parseInt(curShowtimeSeconds % 60)

  if (nextSeconds != curSeconds) {
    if (parseInt(curHours / 10) != parseInt(nextHours / 10)) {
      addBalls(MARGIN_LEFT + 0, MARGIN_TOP, parseInt(curHours / 10))
    }
    if (parseInt(curHours % 10) != parseInt(nextHours % 10)) {
      addBalls(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(curHours / 10))
    }

    if (parseInt(curMinutes / 10) != parseInt(nextMinutes / 10)) {
      addBalls(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(curMinutes / 10))
    }
    if (parseInt(curMinutes % 10) != parseInt(nextMinutes % 10)) {
      addBalls(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(curMinutes % 10))
    }

    if (parseInt(curSeconds / 10) != parseInt(nextSeconds / 10)) {
      addBalls(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(curSeconds / 10))
    }
    if (parseInt(curSeconds % 10) != parseInt(nextSeconds % 10)) {
      addBalls(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(curSeconds % 10)) //这里是%不是/
    }
    curShowtimeSeconds = nextShowTimeSeconds

  }
  updateBalls()
  console.log(balls.length)


}

function addBalls(x, y, num) {
  for (var i = 0; i < digit[num].length; i++) {
    for (var j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] == 1) {
        var aBall = {
          x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          g: 1.5 + Math.random(),
          vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4, //-1*4  or 1*4 
          vy: -5,
          color: colors[Math.floor(Math.random() * colors.length)]
        }
        balls.push(aBall)
      }
      // // console.log(aBall)//这里为什么会有undefined球,balls.push应该放在if判断里面，放在外面了
      // if (aBall === undefined) {
      //   console.log(i, j, num,digit[num][i][j])
      // }
      // if (aBall != undefined) {
      //   balls.push(aBall)
      // }

    }
  }
}


//对所有存在小球进行更新
function updateBalls() {
  for (let i = 0; i < balls.length; i++) {
    balls[i].x += balls[i].vx;
    balls[i].y += balls[i].vy;
    balls[i].vy += balls[i].g

    if (balls[i].y >= WINDOW_HEIGHT - RADIUS) {
      balls[i].y = WINDOW_HEIGHT - RADIUS
      balls[i].vy = -balls[i].vy * 0.75
    }
  }

  var cnt = 0
  for (var i = 0; i < balls.length; i++) {
    if (balls[i].x + RADIUS > 0 && balls[i].x - RADIUS < WINDOW_WIDTH) {
      balls[cnt++] = balls[i]
    }
  }
  while (balls.length > Math.min(300, cnt)) {
    balls.pop()
  }

  // console.log(balls.length,cnt,i)
}

function getCurrentShowTimeSeconds() {
  var curTime = new Date()
  var ret = endTime.getTime() - curTime.getTime()
  ret = Math.round(ret / 1000)
  return ret > 0 ? ret : 0
}

function render(cxt) {
  //对矩形空间画面进行刷新
  cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT)

  var hours = parseInt(curShowtimeSeconds / 3600)
  var minutes = parseInt((curShowtimeSeconds - hours * 3600) / 60)
  var seconds = parseInt(curShowtimeSeconds % 60)

  renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), cxt)
  renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), cxt)
  renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, cxt)

  renderDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes / 10), cxt)
  renderDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes % 10), cxt)
  renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, cxt)

  renderDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds / 10), cxt)
  renderDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds % 10), cxt)

  //draw balls

  for (var i = 0; i < balls.length; i++) {
    //重新设定小球颜色
    cxt.fillStyle = balls[i].color
    cxt.beginPath()
    cxt.arc(balls[i].x, balls[i].y, RADIUS, 0, 2 * Math.PI, true)
    cxt.closePath()
    cxt.fill()
  }
  // cxt.fill() 放在外面了，只产生一个小球


}

function renderDigit(x, y, num, cxt) {
  cxt.fillStyle = "red"

  for (var i = 0; i < digit[num].length; i++) {
    for (var j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] == 1) {
        cxt.beginPath()
        cxt.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1), y + i * 2 * (RADIUS + 1) + RADIUS + 1, RADIUS, 0, 2 * Math.PI)
        cxt.closePath()
        cxt.fill()
      }
    }
  }

}