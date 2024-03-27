console.log("welcome to browser console")
let music = new Audio('music.mp3');
let ting = new Audio('ting.mp3');
let gameover = new Audio('gameover.mp3');

let turn ="X";
let isgameover=false;

// change turn function
const changeTurn=()=>{
    return turn==="X"?"O":"X";
};

// Winner checking function
const checkWin=()=>{
    let chancetext =document.getElementsByClassName('chance-text');
    let winops=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,5],
        [2,4,6]
    ]

    winops.forEach(e=>{
        if((chancetext[e[0]].innerText==chancetext[e[1]].innerText )&& (chancetext[e[2]].innerText==chancetext[e[1]].innerText )&& (chancetext[e[2]].innerText !='' )){
            
            document.querySelector('#chance').innerText='Won by '+turn;
            isgameover=true;
            document.querySelector('#img-result').style.width = "50%";

        }
    });
};

// Gamelogic

let boxes=document.getElementsByClassName('box');

Array.from(boxes).forEach(element =>{
    let chancetext=element.querySelector('.chance-text');
    element.addEventListener('click',()=>{
        if(chancetext.innerText===''){
            chancetext.innerText=turn;
            ting.play();
            checkWin();
            turn =changeTurn();
            if(!isgameover){
                document.getElementById('chance').innerText='Turn for '+turn;
            }
        }
    });
});

reset.addEventListener('click',()=>{
    let texts=document.getElementsByClassName('chance-text');
    Array.from(texts).forEach(ele=>{
        ele.innerText='';
    })
    turn='X';
    isgameover=false;
    document.getElementById('chance').innerText='Turn for '+turn;
    document.querySelector('#img-result').style.width = "0";
    
});