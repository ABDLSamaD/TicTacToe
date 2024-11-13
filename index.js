console.log("games");

let music = new Audio('./music/music.mp3')
let gameOver = new Audio('./music/gameover.mp3')
let audioTurn = new Audio('./music/ting.mp3')
let turn = "X"
let isGameOver = false

// Function to change's Turn Player
const changeTurn = () =>{
    return turn === "X" ? "0" : "X"
}

// Function to Win for a player
const checkWin = () =>{

    // code here ...
    let boxTexts = document.getElementsByClassName("boxText")
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = " The " + boxTexts[e[0]].innerText + " win "
            isGameOver = true
            document.querySelector('.imgBox img').style.width = '200px'
            music.play()
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.width = "20vw"
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector(".boxText")
    element.addEventListener("click", () =>{
        if(boxText.innerHTML === ''){
            boxText.innerHTML = turn
            turn = changeTurn()
            audioTurn.play()
            checkWin()
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn
            }
        }
    })
})


// Add onClick to button to reset the game
reset.addEventListener("click", ()=>{
    let boxTexts = document.querySelectorAll(".boxText")
    Array.from(boxTexts).forEach(element =>{
        element.innerText = ""
        document.querySelector('.imgBox img').style.width = '0'
        
    })
    turn = "X";
    isGameOver = false
    document.querySelector('.line').style.transform = `translate(0, 0) rotate(0)`
    document.querySelector('.line').style.width = "0"
    music.pause()
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn
})