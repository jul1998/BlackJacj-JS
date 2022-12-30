

let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")


let firstCard = Math.floor(Math.random() * 11)+1
let secondCard = Math.floor(Math.random() * 11)+1
 let sum = firstCard + secondCard



function startGame(){

    

    if(sum < 21){
        
        message = "Do you want to draw a new card?"
    } else if( sum === 21){
        message = "Wohoo! You've got Blackjack!"     
        isAlive = false
    }else{
        message = "You're out of the game!"     
    
        hasBlackJack = true
    }
    console.log(message)
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = `Cards: ${firstCard} ${secondCard}` 

    }


function newCard(){
    console.log("Drawing new card from deck")
    let newCard = Math.floor(Math.random() * 11)+1
    sum += newCard
    startGame()
}
