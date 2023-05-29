/* MAQUETACIÓN */

let board_1 = document.getElementById("board1");
let board_2 = document.getElementById("board2");

let Master = [];
let P1 = [];
let P2 = [];

for (let i = 0; i < 90; i++) {
  Master.push(i + 1);
}

random = () => Math.random() - 0.5;

Master.sort(random);
for (let i = 0; i < 15; i++) {
  P1.push(Master[i]);
}

Master.sort(random);
for (let i = 0; i < 15; i++) {
  P2.push(Master[i]);
}

P1.forEach((element) => {
  item = document.createElement("DIV");
  item.classList.add("item");
  item.id = "itemFunctionP1";
  item.innerHTML += element;
  board_1.appendChild(item);
});

P2.forEach((element) => {
  item = document.createElement("DIV");
  item.classList.add("item");
  item.id = "itemFunctionP2";
  item.innerHTML += element;
  board_2.appendChild(item);
});

/* FUNCIONAMIENTO */

let record = document.getElementById("record");
let ball = document.getElementById("ball");
let itemBall = document.getElementById("itemBall");
let itemFunctionP1 = document.querySelectorAll("#itemFunctionP1");
let itemFunctionP2 = document.querySelectorAll("#itemFunctionP2");

Master.sort(random);

let i = 0;
let endGame = 0;
let contain = [];
let pointsP1 = 0;
let pointsP2 = 0;

ball.addEventListener("click", newBall);

function newBall() {
  if (endGame < 90) {
    itemBall.innerHTML = Master[i];
    item = document.createElement("DIV");
    item.classList.add("itemRecord");
    item.innerHTML += Master[i];
    record.appendChild(item);
    contain.push(item.innerHTML);
    i++;
    endGame++;
  } else alert("Fin del Juego");
}

itemFunctionP1.forEach((element) => {
  element.addEventListener("click", () => {
    if (
      element.innerHTML == Master[i - 1] ||
      contain.includes(element.innerHTML)
    ) {
      element.classList.add("itemTached");
      pointsP1++;
      if (pointsP1 == 15) {
        alert("Ganaste PLAYER 1");
        location.reload();
      }
      boton.onclick = null;
    }
  });
});

itemFunctionP2.forEach((element) => {
  element.addEventListener("click", () => {
    if (
      element.innerHTML == Master[i - 1] ||
      contain.includes(element.innerHTML)
    ) {
      element.classList.add("itemTached");
      pointsP2++;
      if (pointsP2 == 15) {
        alert("Ganaste PLAYER 2");
        location.reload();
      }
      boton.onclick = null;
    }
  });
});

/* OTRAS FUNCIONES */

document.addEventListener("keydown", newBallKey);

function newBallKey(event) {
  let action = event.key;

  switch (action) {
    case "Enter":
      newBall();
      break;

    default:
      break;
  }
}
