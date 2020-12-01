// Player name 
    var player1 = "Player 1"; 
    var player2 = "Player 2"; 
  
    // Function to change the player name 
    function editNames() { 
        player1 = prompt("Change Player1 name"); 
        player2 = prompt("Change player2 name"); 
  
        document.querySelector("p.Player1").innerHTML = player1; 
        document.querySelector("p.Player2").innerHTML = player2; 
    } 
// Function to roll the dice 
    function rollTheDice() { 
        setTimeout(function () { 
          var randomNumber1 = Math.floor(Math.random() * (6 - 1) + 1);
var randomNumber2 = Math.floor(Math.random() * (6 - 1) + 1);
player1(randomNumber1);
player2(randomNumber2);
display_msg(randomNumber1,randomNumber2);
//For Player 1
function player1(randomNumber1)
{
    if(randomNumber1 === 1)
        {
            document.querySelector(".img1").setAttribute("src","dicey-1.png");
            console.log(randomNumber1);
        }
    else if(randomNumber1 === 2)
        {
            document.querySelector(".img1").setAttribute("src","dicey-2.png");
            console.log(randomNumber1);
        }
    else if(randomNumber1 === 3)
        {
            document.querySelector(".img1").setAttribute("src","dicey-3.png");
            console.log(randomNumber1);
        }
    else if(randomNumber1 === 4)
        {
            document.querySelector(".img1").setAttribute("src","dicey-4.png");
            console.log(randomNumber1);
        }
    else if(randomNumber1 === 5)
        {
            document.querySelector(".img1").setAttribute("src","dicey-5.png");
            console.log(randomNumber1);
 ``       }
    else
        {
            document.querySelector(".img1").setAttribute("src","dicey-6.png");
            console.log(randomNumber1);
        }
}
//For Player 2
function player2(randomNumber2)
{
    if(randomNumber2 === 1)
        {
            document.querySelector(".img2").setAttribute("src","dicey-1.png");
            console.log(randomNumber1);
        }
    else if(randomNumber2 === 2)
        {
            document.querySelector(".img2").setAttribute("src","dicey-2.png");
            console.log(randomNumber2);
        }
    else if(randomNumber2 === 3)
        {
            document.querySelector(".img2").setAttribute("src","dicey-3.png");
            console.log(randomNumber2);
        }
    else if(randomNumber2 === 4)
        {
            document.querySelector(".img2").setAttribute("src","dicey-4.png");
            console.log(randomNumber2);
        }
    else if(randomNumber2 === 5)
        {
            document.querySelector(".img2").setAttribute("src","dicey-5.png");
            console.log(randomNumber2);
        }
    else
        {
            document.querySelector(".img2").setAttribute("src","dicey-6.png");
            console.log(randomNumber2);
        }
}
function display_msg(randomNumber1,randomNumber2)
{
            if (randomNumber1 === randomNumber2) { 
                document.getElementById("disp").innerHTML = "Draw!"; 
            } 
  
            else if (randomNumber1 < randomNumber2) { 
                 document.getElementById("disp").innerHTML 
                                = "Player 2 Wins"; 
            } 
  
            else { 
                 document.getElementById("disp").innerHTML 
                                = "Player 1 Wins"; 
            } 
        } 
    }, 2500);
}