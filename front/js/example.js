var socket = io("localhost:5000");
    socket.on('connect', function() {
        socket.emit('on_connect', {msg: 'I\'m connected!'});
    });


let app = new PIXI.Application({ 
    width: 1000, 
    height: 900,                       
  }
);

document.body.appendChild(app.view);

PIXI.loader
  .add("images/cat.png")
  .load(setup);

function setup() {
  let cat = new PIXI.Sprite(PIXI.loader.resources["images/cat.png"].texture);
  cat.rotation = 0.5;
  cat.x = 96;
  cat.y = 96;
  app.ticker.add(delta => gameLoop(delta));
  app.stage.addChild(cat);
  function gameLoop(delta){
    cat.rotation += 0.01;  
    var roundedString = cat.rotation.toFixed(2);
    cat.rotation = Number(roundedString);
    if(cat.rotation%1==0){
        console.log(cat.rotation);
        socket.emit('rotation', {msg: cat.rotation});
    }
  }
}




