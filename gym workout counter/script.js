let btnOne = document.querySelector("#one")
let btnTwo = document.querySelector("#two")
let btnThree = document.querySelector("#three")
let btnFour = document.querySelector("#four")
let btnFive = document.querySelector("#five")
let btnSix = document.querySelector("#six")
let btns = document.querySelectorAll(".btn1")

let count = 0;
btnOne.addEventListener("click" , () =>{
    count++;
    console.log("count is =",count);
});


btnTwo.addEventListener("click" , () =>{
        if(count > 0){
            --count;
        }
        console.log("count is =",count);
});


btnThree.addEventListener("click" , () =>{
    count = 0;
    console.log("Let's start the game buddy",count);
});


btnFour.addEventListener("click" , () =>{
    count = 0;
    console.log("Resetted the game buddy !",count);
});

let rep = btnFive.addEventListener("click" , () =>{
    console.log("Your total repetations = ",count);
});

btnSix.addEventListener("click" , () =>{
    console.log("Game ended successfully!");
    console.log("your score is =",rep);
    // break;
});