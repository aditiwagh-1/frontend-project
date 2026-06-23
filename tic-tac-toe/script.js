// let boxes = document.querySelectorAll(".btn"); //selected the class 
// let resetBtn = document.querySelector("#reset-btn"); //selected the id 
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msgContainer");
// let msg = document.querySelector("#msg");


// //player x and player O
// let turno = true;

// //2d array
// let arr = [[],[],[]];

// const winpatterns = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ];

// //function for the rest game 
// const resetGame = () =>{
//     turno = true;
//     enabledBoxes();
//     msgContainer.classList.add("hide");

// }


// //adding the event listener to all the buttins uaing the for each loop
// boxes.forEach((btn) =>{ 
//     btn.addEventListener("click",() =>{
//         console.log("box was clicked!");
//         if(turno){
//             btn.innerText = "O";
//             turno = false;
//         }
//         else{
//             btn.innerText = "X";
//             turno = true;
//         }
//         btn.disabled = true;
//         checkwinner();
//     });
// });

// //disabled the buttons after the winner is declared
// const disabledBoxes = () =>{
//     for(let btn of boxes){
//         btn.disabled = true; 
//     }
// }

// //enable the buttons when the game is start 
// const enabledBoxes = () =>{
//     for(let btn of boxes){
//         btn.disabled = false; 
//         btn.innerText = "";
//     }
// }


// //function to show the winner
// const showWinner = (winner) =>{
//     msg.innerText = `Congratulations, winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disabledBoxes();
// }

// //creating the function to checking the winner
// // here we have to check the single single winning pattern carefully 
// const checkwinner = () =>{
//     for(let pattern of winpatterns){
//         let pos1val = boxes[pattern[0]].innerText
//         let pos2val = boxes[pattern[1]].innerText
//         let pos3val = boxes[pattern[2]].innerText
        
//         if(pos1val != "" && pos2val != "" && pos3val != ""){
//             if(pos1val === pos2val && pos2val === pos3val){
//                 console.log("Winner", pos1val) ;
//                 showWinner(pos1val);
//                 return; 🔥 STOP HERE
//             }
//         }
//     }
// };


// newGameBtn.addEventListener("click",resetGame);
// resetBtn.addEventListener("click",resetGame);






let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);