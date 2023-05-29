/* MAQUETACIÓN */

let board_1 = document.getElementById("board1");
let cpuBoard = document.getElementById("cpuBoard");

let Master = [];
let P1 = [];
let CPU = [];

for (let i = 0; i < 40; i++) {
  Master.push(i + 1);
}

random = () => Math.random() - 0.5;

Master.sort(random);
for (let i = 0; i < 15; i++) {
  P1.push(Master[i]);
}

Master.sort(random);
for (let i = 0; i < 15; i++) {
  CPU.push(Master[i]);
}

P1.forEach((element) => {
  item = document.createElement("DIV");
  item.classList.add("itemP1");
  item.id = "itemFunctionP1";
  item.innerHTML += element;
  board_1.appendChild(item);
});

CPU.forEach((element) => {
  item = document.createElement("DIV");
  item.classList.add("itemCPU");
  item.id = "itemFunctionCPU";
  item.innerHTML += element;
  cpuBoard.appendChild(item);
});

/* FUNCIONAMIENTO */

let record = document.getElementById("record");
let ball = document.getElementById("ball");
let itemBall = document.getElementById("itemBall");
let itemFunctionP1 = document.querySelectorAll("#itemFunctionP1");
let itemFunctionCPU = document.querySelectorAll("#itemFunctionCPU");

Master.sort(random);
let i = 0;
let endGame = 0;
let contain = [];
let pointsP1 = 0;
let pointsCPU = 0;

ball.addEventListener("click", newBall);

function newBall() {
  if (endGame < 40) {
    itemBall.innerHTML = Master[i];
    item = document.createElement("DIV");
    item.classList.add("itemRecord");
    item.innerHTML += Master[i];
    record.appendChild(item);
    contain.push(item.innerHTML);
    i++;
    endGame++;
  } else alert("Fin del Juego");

  cpuTurn();
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
    }
  });
});

cpuTurn = () => {
  itemFunctionCPU.forEach((element) => {
    if (element.innerHTML == Master[i - 1]) {
      element.classList.add("itemTached");
      pointsCPU++;
      if (pointsCPU == 15) {
        alert("La CPU Gana");
        location.reload();
      }
    }
  });
};

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
