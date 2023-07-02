let secretNumber = Math.floor(Math.random()*20)+1;
let score =20;
let highScore=0
console.log(secretNumber)

//Selcting check button
const c=document.querySelector(".check")

//add event listener to check button
c.addEventListener("click",()=>{

    //fetch the user iput from the DOM
    let guess = Number(document.querySelector(".guess").value)

    //console.log(guess)

    if(!guess)
    {
        alert("Enter a valid input!")
    }
    //correct guess

    else if(secretNumber === guess)
    {
        //change the message color 

        document.querySelector("body").style.backgroundColor= "rgb(153, 92, 134) "

        //Display the message->you guesed it right

        document.querySelector(".message").innerHTML="You guessed it right  👍"

        //Display the secret number

        document.querySelector(".number").textContent = secretNumber

        //Check for new high score and display it

        document.querySelector(".highscore").innerHTML = score
    }

    //guess is less than random number

    else if(secretNumber > guess)
    {
        if(score > 0)
        {
            //display you lost if score goes below 0

        score=score - 1
        document.querySelector(".score").textContent= score
        document.querySelector(".message").innerHTML="Too low!"
        
            //otherwise display the message too low,display scoreand decremented the score
        }
        else
        {
            document.querySelector(".message").innerHTML="You lost!"
            document.querySelector("body").style.backgroundColor="rgb(156, 216, 156)"
            document.querySelector("h1").textContent="Ansawer is:"
            document.querySelector(".number").textContent = secretNumber
        }
    }
    //guess the greater than raandom number
    else if(secretNumber < guess){
        if(score > 0){
            
            //display you lost if score goes below 0

            score=score - 1
            document.querySelector(".score").textContent= score

            //otherwise display the message too low,display scoreand decremented the score
            
            document.querySelector(".message").innerHTML="Too high!"
        }
        else
        {
            document.querySelector(".message").innerHTML="You lost!"
            document.querySelector("body").style.backgroundColor="rgb(156, 216, 156)"
            document.querySelector("h1").textContent="Ansawer is:"
            document.querySelector(".number").textContent=secretNumber   
        }
    }
})