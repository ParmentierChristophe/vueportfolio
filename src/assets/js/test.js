// /**
//  * Vars
//  */
// var points = [];
// var rafID = null;

// var guiVars = function() {
//   this.totalPoints = 6;
//   this.viscosity = 20;
//   this.mouseDist = 80;
//   this.damping = 0.15;
//   this.showIndicators = false;
//   this.leftColor = '#a8d0e6';
//   this.rightColor = '#f76c6c';
// }
// var vars = new guiVars();

// window.onload = function() {
//   var gui = new dat.GUI();
//   gui.add(vars, 'showIndicators');
//   var controller = gui.add(vars, 'totalPoints', 2, 20).step(1);
//   gui.add(vars, 'viscosity', 10, 500);
//   gui.add(vars, 'mouseDist', 20, 400);
//   gui.add(vars, 'damping', 0.01, 0.5);
//   gui.addColor(vars, 'leftColor');
//   gui.addColor(vars, 'rightColor');

//   controller.onChange(function() {
//     cancelAnimationFrame(rafID);
//     initCanvas();
//   });
// };

// /**
//  * Mouse handler
//  */
// var mouseX = 0,
//   mouseY = 0,
//   mouseLastX = 0,
//   mouseLastY = 0,
//   mouseDirectionX = 0,
//   mouseDirectionY = 0,
//   mouseSpeedX = 0,
//   mouseSpeedY = 0;

// // Get mouse direction
// function mouseDirection(e) {
//   if (mouseX < e.pageX)
//     mouseDirectionX = 1;
//   else if (mouseX > e.pageX)
//     mouseDirectionX = -1;
//   else
//     mouseDirectionX = 0;

//   if (mouseY < e.pageY)
//     mouseDirectionY = 1;
//   else if (mouseY > e.pageY)
//     mouseDirectionY = -1;
//   else
//     mouseDirectionY = 0;

//   mouseX = e.pageX;
//   mouseY = e.pageY;
// }
// $(document).on('mousemove', mouseDirection);

// // Get mouse speed
// function mouseSpeed() {
//   mouseSpeedX = mouseX - mouseLastX;
//   mouseSpeedY = mouseY - mouseLastY;

//   mouseLastX = mouseX;
//   mouseLastY = mouseY;

//   setTimeout(mouseSpeed, 50);
// }
// mouseSpeed();

// /**
//  * Point
//  */
// function Point(x, y, canvas) {
//   this.x = x;
//   this.ix = x;
//   this.vx = 0;
//   this.cx = 0;
//   this.y = y;
//   this.iy = y;
//   this.cy = 0;
//   this.canvas = canvas;
// }

// Point.prototype.move = function() {
//   this.vx += (this.ix - this.x) / vars.viscosity;

//   var dx = this.ix - mouseX,
//     dy = this.y - mouseY;

//   var gap = this.canvas.data('gap');

//   // Move point only when leaving color block
//   if ((mouseDirectionX > 0 && mouseX > this.x) || (mouseDirectionX < 0 && mouseX < this.x)) {
//     if (Math.sqrt(dx * dx) < vars.mouseDist && Math.sqrt(dy * dy) < gap) {
//       this.vx = mouseSpeedX / 8
//     }
//   }

//   this.vx *= (1 - vars.damping);
//   this.x += this.vx;
// };

// /**
//  * Init canvas
//  */
// function initCanvas() {
//   var canvas = $('canvas');
//   var context = canvas.get(0).getContext('2d');

//   cancelAnimationFrame(rafID);

//   // Resize canvas
//   $('canvas').get(0).width = $(window).width();
//   $('canvas').get(0).height = $(window).height();

//   // Add points
//   points = [];
//   var gap = (canvas.height()) / (vars.totalPoints - 1);
//   var pointX = $(window).width() / 2;

//   for (var i = 0; i <= vars.totalPoints - 1; i++)
//     points.push(new Point(pointX, i * gap, canvas));

//   // Start render
//   renderCanvas();

//   canvas.data('gap', gap);
// }

// /**
//  * Render canvas
//  */
// function renderCanvas() {
//   var canvas = $('canvas');
//   var context = canvas.get(0).getContext('2d');

//   // rAF
//   rafID = requestAnimationFrame(renderCanvas);

//   // Clear scene
//   context.clearRect(0, 0, canvas.width(), canvas.height());
//   context.fillStyle = vars.leftColor;
//   context.fillRect(0, 0, canvas.width(), canvas.height());

//   // Move points
//   for (var i = 0; i <= vars.totalPoints - 1; i++)
//     points[i].move();

//   // Draw shape
//   context.fillStyle = vars.rightColor;
//   context.strokeStyle = vars.rightColor;
//   context.lineWidth = 1;
//   context.beginPath();

//   context.moveTo($(window).width() / 2, 0);

//   for (var i = 0; i <= vars.totalPoints - 1; i++) {
//     var p = points[i];

//     if (points[i + 1] != undefined) {
//       p.cx = (p.x + points[i + 1].x) / 2 - 0.0001; // - 0.0001 hack to fix a 1px offset bug on Chrome...
//       p.cy = (p.y + points[i + 1].y) / 2;
//     } else {
//       p.cx = p.ix;
//       p.cy = p.iy;
//     }
    
//     context.bezierCurveTo(p.x, p.y, p.cx, p.cy, p.cx, p.cy);
//   }

//   context.lineTo($(window).width(), $(window).height());
//   context.lineTo($(window).width(), 0);
//   context.closePath();
//   context.fill();

//   if (vars.showIndicators) {
//     // Draw points
//     context.fillStyle = '#000';
//     context.beginPath();
//     for (var i = 0; i <= vars.totalPoints - 1; i++) {
//       var p = points[i];

//       context.rect(p.x - 2, p.y - 2, 4, 4);
//     }
//     context.fill();

//     // Draw controls
//     context.fillStyle = '#fff';
//     context.beginPath();
//     for (var i = 0; i <= vars.totalPoints - 1; i++) {
//       var p = points[i];

//       context.rect(p.cx - 1, p.cy - 1, 2, 2);
//     }
//     context.fill();
//   }
// }

// /**
//  * Resize handler
//  */
// function resizeHandler() {
//   initCanvas();
// }
// $(window).on('resize', resizeHandler).trigger('resize');
window.onload = function () {
  const win = window
  const doc = document.documentElement

  doc.classList.remove('no-js')
  doc.classList.add('js')
  
  // Moving objects
  const movingObjects = document.querySelectorAll('.is-moving-object')

  // Throttling
  function throttle (func, milliseconds) {
    let lastEventTimestamp = null
    let limit = milliseconds

    return (...args) => {
      let now = Date.now()

      if (!lastEventTimestamp || now - lastEventTimestamp >= limit) {
        lastEventTimestamp = now
        func.apply(this, args)
      }
    }
  }

  // Init vars
  let mouseX = 0
  let mouseY = 0
  let scrollY = 0
  let coordinateX = 0
  let coordinateY = 0
  let winW = doc.clientWidth
  let winH = doc.clientHeight

  // Move Objects
  function moveObjects (e, object) {
    mouseX = e.pageX
    mouseY = e.pageY
    scrollY = win.scrollY
    coordinateX = (winW / 2) - mouseX
    coordinateY = (winH / 2) - (mouseY - scrollY)

    for (let i = 0; i < object.length; i++) {
      const translatingFactor = object[i].getAttribute('data-translating-factor') || 20
      const rotatingFactor = object[i].getAttribute('data-rotating-factor') || 20
      const perspective = object[i].getAttribute('data-perspective') || 500
      let tranformProperty = []

      if (object[i].classList.contains('is-translating')) {
        tranformProperty.push('translate(' + coordinateX / translatingFactor + 'px, ' + coordinateY / translatingFactor + 'px)')
      }

      if (object[i].classList.contains('is-rotating')) {
        tranformProperty.push('perspective(' + perspective + 'px) rotateY(' + -coordinateX / rotatingFactor + 'deg) rotateX(' + coordinateY / rotatingFactor + 'deg)')
      }

      if (object[i].classList.contains('is-translating') || object[i].classList.contains('is-rotating')) {
        tranformProperty = tranformProperty.join(' ')

        object[i].style.transform = tranformProperty
        object[i].style.transition = 'transform 1s ease-out'
        object[i].style.transformStyle = 'preserve-3d'
        object[i].style.backfaceVisibility = 'hidden'
      }
    }
  }

  // Call function with throttling
  if (movingObjects) {
    win.addEventListener('mousemove', throttle(
      function (e) {
        moveObjects(e, movingObjects)
      },
      150
    ))
  }
}
