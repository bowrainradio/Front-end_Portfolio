let engine = Matter.Engine.create();

let render = Matter.Render.create({
    element: document.body,
    engine:engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'tomato'
    }
});


let ground = Matter.Bodies.rectangle(500, 500, 920, 1, {
    isStatic: true
});
let boxA = Matter.Bodies.rectangle(400, 200, 80, 80, {
    render: {
        fillStyle: 'red',
    }
});
let boxB = Matter.Bodies.rectangle(500, 50, 80, 80, {
    render: {
        fillStyle: 'orange'
    }
});

let ball = function (mouseX,mouseY) {
    return Matter.Bodies.rectangle(mouseX, mouseY, 80, 80, {
        render: {
            fillStyle: getRandomRgb()
        }
    });
}


// let mouse = Matter.Mouse.create(render.canvas)
// let mouseConstrain = Matter.MouseConstraint.create(engine, {
//     mouse: mouse,
//     constraint: {
//         render: {visible: true}
//     }
// });
// render.mouse = mouse;


Matter.World.add(engine.world,[boxA, boxB, ground]);
Matter.Engine.run(engine);
Matter.Render.run(render);


function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }


$(document).on('click', function (event) {
    let x = event.clientX;
    let y = event.clientY;
    Matter.World.add(engine.world, ball(x, y));
});