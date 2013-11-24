
console.log("initialize")
var xposDoug = 30
var yposDoug = 70
var xposJoe = 100
var yposJoe = 70
var upPressed = 0
var downPressed = 0
var leftPressed = 0
var rightPressed = 0

function keyDown(prs)  {
  var code = prs.keyCode ? prs.keyCode : prs.which;
  if (code == 38)  upPressed = 1;
  if (code == 40)  downPressed = 1;
  if (code == 37)  leftPressed = 1;
  if (code == 39)  rightPressed = 1;
}
function keyUp(rls)  {
  var code = rls.keyCode ? rls.keyCode : rls.which;
  if (code == 38)  upPressed = 0;
  if (code == 40)  downPressed = 0;
  if (code == 37)  leftPressed = 0;
  if (code == 39)  rightPressed = 0;
}
function rightClick(e) {
  if (e.pageX || e.pageY)   {
    xposDoug = e.pageX;
    yposDoug = e.pageY;
  }
  else if (e.clientX || e.clientY)  {
    xposDoug = e.clientX + document.body.scrollLeft
      + document.documentElement.scrollLeft;
    yposDoug = e.clientY + document.body.scrollTop
      + document.documentElement.scrollTop;
  }
}
function gameLoop()  {            // Game Logic
  if (upPressed == 1)    { yposJoe = yposJoe - 3;  console.log("up");    }
  if (downPressed == 1)  { yposJoe = yposJoe + 3;  console.log("down");  }
  if (rightPressed == 1) { xposJoe = xposJoe + 3;  console.log("right"); }
  if (leftPressed == 1)  { xposJoe = xposJoe - 3;  console.log("left");  }

  document.getElementById('doug').style.left = xposDoug;
  document.getElementById('doug').style.top = yposDoug;

  document.getElementById('joe').style.left = xposJoe;
  document.getElementById('joe').style.top = yposJoe;

  setTimeout("gameLoop()",10);     // Loop every 10 milliseconds
}
