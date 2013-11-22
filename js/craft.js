
console.log("initialize")
var xpos = 30
var ypos = 70
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
function gameLoop()  {            // Game Logic
  if (upPressed == 1)    { ypos = ypos - 3;  console.log("up");    }
  if (downPressed == 1)  { ypos = ypos + 3;  console.log("down");  }
  if (rightPressed == 1) { xpos = xpos + 3;  console.log("right"); }
  if (leftPressed == 1)  { xpos = xpos - 3;  console.log("left");  }

  document.getElementById('character').style.left = xpos;
  document.getElementById('character').style.top = ypos;

  setTimeout("gameLoop()",10);     // Loop every 10 milliseconds
}
