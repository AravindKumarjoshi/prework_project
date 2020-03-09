queen = {
  direction: "s",
  position: {
    x: 0,
    y: 4
  },
}
var temp = 0, temp1 = 0, steps;
function changeDirection(steps, direction) {
  //console.log(steps);
  switch (direction) {
    case "n":
      temp = queen.position.x - steps
      if (temp >= 0 && temp < 8) {
        queen.position.x = queen.position.x - steps;
      }

      else {
        console.log("Not in range");
      }
      break;
    case "s":
      temp = queen.position.x + steps;
      if (temp >= 0 && temp < 8) {
        queen.position.x = queen.position.x + steps;
      }
      else {
        console.log("Not in range");
      }
      break;
    case "e":
      temp = queen.position.y + steps;
      if (temp >= 0 && temp < 8) {
        queen.position.y = queen.position.y + steps;
      }
      else {
        console.log("Not in range");
      }
      break;
    case "w":
      temp = queen.position.y - steps;
      if (temp >= 0 && temp < 8) {
        queen.position.y = queen.position.y - steps;
      }
      else {
        console.log("Not in range");
      }
      break;
    case "ne":
      temp = queen.position.x - steps;
      temp1 = queen.position.y + steps;
      if (temp < 8 && temp >= 0) {
        if (temp1 < 8 && temp1 >= 0) {
          queen.position.x = queen.position.x - steps;
          queen.position.y = queen.position.y + steps;
        }
        else {
          console.log("Not in range");
        }
      }
      else {
        console.log("Not in range");
      }
      break;
    case "nw":
      temp = queen.position.x - steps;
      temp1 = queen.position.y - steps;
      if (temp < 8 && temp >= 0) {
        if (temp1 < 8 && temp1 >= 0) {
          queen.position.x = queen.position.x - steps;
          queen.position.y = queen.position.y - steps;
        }
        else {
          console.log("Not in range");
        }
      }
      else {
        console.log("Not in range");
      }
      break;
    case "se":
      temp = queen.position.x + steps;
      temp1 = queen.position.y + steps;
      if (temp < 8 && temp >= 0) {
        if (temp1 < 8 && temp1 >= 0) {
          queen.position.x = queen.position.x + steps;
          queen.position.y = queen.position.y + steps;
        }
        else {
          console.log("Not in range");
        }
      }
      else {
        console.log("Not in range");
      }
      break;
    case "sw":
      temp = queen.position.x - steps;
      temp1 = queen.position.y + steps;
      if (temp < 8 && temp >= 0) {
        if (temp1 < 8 && temp1 >= 0) {
          queen.position.x = queen.position.x + steps;
          queen.position.y = queen.position.y - steps;
        }
        else {
          console.log("Not in range");
        }
      }

      else {
        console.log("Not in range");
      }
      break;
  }
}

var input = prompt("Enter direction");
var first = input.split(" ")
var a = first[0];
var b = first[1];
//console.log(a);
changeDirection(b, a);
console.log("the position of queen is:" + queen.position.x, queen.position.y)

/*positionlog = [["a8", "b8", "c8", "e8", "f8", "g8", "h8"],
["a7", "b7", "c7", "e7", "f7", "g7", "h7"],
["a6", "b6", "c6", "e6", "f6", "g6", "h6"],
["a5", "b5", "c5", "e5", "f5", "g5", "h5"],
["a4", "b4", "c4", "e4", "f4", "g4", "h4"],
["a3", "b3", "c3", "e3", "f3", "g3", "h3"],
["a2", "b2", "c2", "e2", "f2", "g2", "h2"],
["a1", "b1", "c1", "e1", "f1", "g1", "h1"],] */

