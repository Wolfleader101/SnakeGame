keyActions = {
    38: "up",
    87: "up",
    40: "down",
    83: "down",
    37: "left",
    65: "left",
    39: "right",
    68: "right",
    32: "space"
   };

   $("body").keydown(event => {
    var newDirection = keyActions[event.keyCode];
    if(newDirection !== undefined) {
        Snake.setDirection(newDirection);
    }
    if (newDirection === "space") {

	location.reload();
    }
   })