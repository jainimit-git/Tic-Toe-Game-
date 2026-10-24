let boxes = document.querySelectorAll('.box');
let resbutt = document.querySelector('#reset');
let newGameButton = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turn0 = true;
let count = 0 ;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        console.log('clicked');
        if(turn0){
            box.innerText = 'O';
            turn0 = false;
        }else{
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;
        count++;
        checkwinner();

        if(count===9 && !ischeckwinner()){
            msg.innerHTML = `Game Draw`;
            msgContainer.classList.remove("hide");
            disableBoxes();
        }

    })
})

const restGame = ()=>{
    turn0 = true;
    count =0;
    enableBoxes();
    msgContainer.classList.add("hide");
}



const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner)=>{
   msg.innerHTML = `Congratulations Winner: ${winner}`;
   msgContainer.classList.remove("hide");
   disableBoxes();
}

const checkwinner = ()=>{
for(let pattern of winningCombinations){
   let pos1val = boxes[pattern[0]].innerText;
   let pos2val = boxes[pattern[1]].innerText;
   let pos3val = boxes[pattern[2]].innerText;   
   if(pos1val !==' ' && pos2val !== ' ' && pos3val !== ''){
    if(pos1val === pos2val && pos2val === pos3val){
        console.log('winner');
        showWinner(pos1val);
        return ;
   }
}}}

newGameButton.addEventListener("click", restGame);
resbutt.addEventListener("click", restGame);
