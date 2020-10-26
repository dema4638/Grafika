function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var step1 = 0;
    var ang = 0;
    var rotateDeg = 0;
    var skewing = 0;
    var y1;

    function drawFrame() {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(500, 0);
      ctx.lineTo(500, 500);
      ctx.lineTo(0, 500);
      ctx.closePath();
      ctx.stroke();
      //Horizontal line
      // ctx.beginPath();
      // ctx.moveTo(250, 0);
      // ctx.lineTo(250, 500);
      // ctx.stroke();
      // ctx.closePath();
      // //Vertical line
      // ctx.beginPath();
      // ctx.moveTo(0, 250);
      // ctx.lineTo(500, 250);
      // ctx.stroke();
      // ctx.closePath();
    }

    var x1 = 1;

    drawFrame();
    drawF(step1);
    var xCord = 2.5;
    var yCord = 2.5;

    // TRANSFORMATIONS
    var interval;
    document.getElementById("1st").addEventListener("click", function() {
      ctx.fillStyle = "red";
      x1 = 1;
      xCord = 2.5;
      yCord = 0;
      interval = setInterval(draw1, 20);
    })

    function draw1() {
      if (x1 <= 0.5) {
        clearInterval(interval);
      }
      ctx.save();
      x1 = x1 - 0.005;
      ctx.clearRect(0, 0, 500, 500);
      ctx.transform(x1, 0, 0, x1, xCord, yCord);
      drawT();
      ctx.restore();
      drawFrame();
    }

    //document.getElementById("2nd").addEventListener("click", function() );
    document.getElementById("2nd").addEventListener("click", function() {
      ctx.fillStyle = "blue";
      xCord = 0;
      yCord = 0;
      x1 = 1;
      skew = 0;
      interval = setInterval(draw2, 20);
    })

    function draw2(){
      if (skew <= -0.5) {
        clearInterval(interval);
      }
      ctx.save();
      //x1 = x1 - 0.005;
      ctx.clearRect(0, 0, 500, 500);

      ctx.transform(x1+skew*2, skew, skew, x1+skew*2, xCord, yCord);
      xCord+= 10;
      yCord+=5;
      drawT();
      skew -= 0.01;
      ctx.restore();
      drawFrame();
    }


    var interval
    document.getElementById("3rd").addEventListener("click", function() {
      ctx.fillStyle = "green";
      xCord = 1;
      yCord = 0;
      x1 = 1;
      interval = setInterval(draw3, 20);
    })

    function draw3() {
      if (x1 <= 0.5) {
        clearInterval(interval);
      }
      ctx.save();
      x1 = x1 - 0.005;
      ctx.clearRect(0, 0, 500, 500);
      ctx.transform(x1, 0, 0, x1, xCord, yCord);
      drawT();
      xCord += 2.5;
      yCord += 2.5;
      ctx.restore();
      drawFrame();
    }
var yScale;
    document.getElementById("4th").addEventListener("click", function() {
      ctx.fillStyle = "purple";
      // x1 = 1;
      // y1 = 1;
      // xCord = 0;
      // yCord = 0;
      xCord = 1;
      yCord = 0;
      xScale = 1;
      yScale = 1;
      interval = setInterval(draw4, 20);
    })

    function draw4() {
      // if (scale <= 0.25) {
      if (yScale <= -0.25) {
        clearInterval(interval);
      }
      ctx.save();
      //x1 = x1 - 0.005;
      ctx.clearRect(0, 0, 500, 500);

      ctx.transform(xScale, 0, 0, yScale, xCord, yCord);
      yScale -= 0.0125
      xScale -= 0.0075;
      xCord += 1.25;
      yCord +=3.75;
      // scale-=0.0075;
      // xCord+= 1.25;
      // yCord+=3.75;
      drawT();
      ctx.restore();
      drawFrame();

      // if (yCord >= 375 * 4) {
      //   clearInterval(interval);
      // }
      // ctx.save();
      // ctx.clearRect(0, 0, 500, 500);
      //
      // ctx.scale(x1, y1);
      // if (y1 >= 0) {
      //   ctx.translate(xCord, yCord);
      // } else {
      //   ctx.translate(xCord, -yCord);
      // }
      // drawT();
      // if (xCord < 125 * 4) {
      //   xCord += 5;
      // }
      // if (yCord < 375 * 4) {
      //   yCord += 5;
      // }
      // if (y1 > -0.25) {
      //   y1 -= 0.005;
      // }
      //
      // if (x1 > 0.25) {
      //   x1 -= 0.005;
      // }
      // ctx.restore();
      // drawFrame();
    }

    document.getElementById("next").addEventListener("click", function() {
      if (step1 < 7) {
        x = 0;
        ctx.save();
        ctx.clearRect(0, 0, 500, 500);
        drawFrame();
        step1++;
        document.getElementById("result").innerHTML = "Level: " + (step1);
        drawF(step1);
        ctx.restore();
      }
    });

    document.getElementById("previous").addEventListener("click", function() {
      if (step1 > 0) {
        x = 0;
        ctx.save();
        ctx.clearRect(0, 0, 500, 500);
        drawFrame();
        document.getElementById("result").innerHTML = "Level: " + (step1 - 1);
        step1--;
        drawF(step1);
        ctx.restore();
      }
    });
  }
  // Recursive draw
  function drawF(step) {
    var currStep = 0;
    if (step > 0) {
      step = step - 1;
      ctx.save();
      ctx.save();
      ctx.save();

      if (step == (step1 - 1)) {
        ctx.fillStyle = "red";
      }
      ctx.transform(0.5, 0, 0, 0.5, 0, 0);
      drawF(step);
      ctx.restore();
      if (step == (step1 - 1)) {
        ctx.fillStyle = "blue";
      }
      ctx.transform(0, -0.5, -0.5, 0, 500, 250);
      drawF(step);
      ctx.restore();
      if (step == (step1 - 1)) {
        ctx.fillStyle = "purple";
      }
      //  ctx.transform(0, 0.25, -0.25, 0, 250, 250);
      ctx.transform(0.25, 0, 0, -0.25, 125, 375);
      x--;
      drawF(step);
      ctx.restore();

      if (step == (step1 - 1)) {
        ctx.fillStyle = "green";
      }
      ctx.transform(0.5, 0, 0, 0.5, 250, 250);
      drawF(step);
    } else drawT();
  }

  function drawT() {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(500, 0);
    ctx.lineTo(500, 500);
    ctx.lineTo(0, 0);
    ctx.lineTo(250, 250);
    ctx.lineTo(250, 375);
    ctx.lineTo(125, 375);
    ctx.lineTo(250, 250);
    ctx.fill();
    ctx.closePath();
  }
}
