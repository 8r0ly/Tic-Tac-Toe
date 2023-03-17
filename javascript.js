let playerSymbol="X";
//to keep track whether the game has ended
let gameEnded=false
let winPos=[
    [1,2,3], [4,5,6], [7,8,9],
    [1,4,7], [2,5,8], [3,6,9], 
    [1,5,9], [3,5,7], 
];

//for each cell i.e., 1 to 9, adding an event listener that will run whenever user clicks on the cell
for(let i=1;i<=9;i++) {
    document.getElementById(i.toString()).addEventListener(
        "click", 
     function() {
         if(this.innerHTML ==="" && !gameEnded) {
         //display either "X" or "O" in the cell
         this.innerHTML= playerSymbol;
         this.classList.add(playerSymbol.toLowerCase());
         //call the checkWin() every time a player has a turn
         //check if the player has won
         checkWin();
         //swap the symbol to the other one for the next turn
         if (playerSymbol==="O")
           playerSymbol="X"
         else
           playerSymbol="O"
         }
     }
     );
}
function checkWin() {
    //loop through each of the possible winning position
    for(let i=0;i<winPos.length;i++) {
        //check if all cells contain the player's symbol
        if(
            document.getElementById(winPos[i][0]).innerHTML === playerSymbol &&
            document.getElementById(winPos[i][1]).innerHTML === playerSymbol &&
            document.getElementById(winPos[i][2]).innerHTML === playerSymbol 
        )   {
            //if the condition evaluates to true, then all symbols are in a straight line. Display a message to the user
            document.getElementById(winPos[i][0]).classList.add("win");
            document.getElementById(winPos[i][1]).classList.add("win");
            document.getElementById(winPos[i][2]).classList.add("win");
            gameEnded = true;
            setTimeout(function() {
                alert(playerSymbol+" "+"loses!");
            }, 500);
        }
    }
}
//event handler that will run whenever the user clicks on the reset button
document.getElementById("reset").addEventListener(
    "click",
    function() {
        //for each cell, get the HTML elmente using the getDlementById()
        //reset the innerHTML to remove the "O" ansd "X" symbols and remove all the other CSS styling
        for(let i=1;i<=9;i++) {
            document.getElementById(i.toString()).innerHTML ="";
            document.getElementById(i.toString()).classList.remove("x");
            document.getElementById(i.toString()).classList.remove("o");
            document.getElementById(i.toString()).classList.remove("win");
            gameEnded = false;
        }
    }
);