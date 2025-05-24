import { Player } from "./player"
import { Ship } from "./ship"
import { renderBoard, displayWinner } from "./domRender"

export function Driver(){
    let playerHuman = Player('human')
    let playerComputer = Player('computer')
    let turn = playerHuman
    let isGameOver = false


    function randomPlacement(player){
        const carrier = Ship(5)
        const battleship = Ship(4)
        const cruiser = Ship(3)
        const submarine = Ship(3)
        const destroyer = Ship(2)

        const shipArr = [carrier, battleship, cruiser, submarine, destroyer]

        while(shipArr.length > 0){
            
        let randomX = randomNumber()
        let randomY = randomNumber()
        let randomDir = randomDirection()

        let currShip = shipArr.pop()

        while(!player.gameboard.place(randomX, randomY, currShip, randomDir)){
            randomX = randomNumber()
            randomY = randomNumber()
            randomDir = randomDirection()
        }
    }
}


    function playerTurn(x, y){

        if(isGameOver){
            return
        }

        //prevents from clicking while computer is taking turn
        if(turn != playerHuman){
            return
        }

        //Doesn't count already clicked cells
        if(this.playerComputer.gameboard.board[x][y] == 'miss' || this.playerComputer.gameboard.board[x][y] == 'hit'){
            return
        }

        //Hit and save if was hit
        let hit = this.playerComputer.gameboard.receiveAttack(x,y)
        
        

        renderBoard(playerHuman)
        renderBoard(playerComputer)

        if(playerComputer.gameboard.isGameOver()){
            handleGameOver(playerHuman)
        }

        if(hit){
            return
        }

        nextTurn()



    }


    function nextTurn(){
        if(turn == playerHuman){
            turn = playerComputer
            computerTurn()
        }
        else{
            //Human player turn
            turn = playerHuman
            return
        }
    }

    function handleGameOver(player){
        isGameOver = true
        displayWinner(player)
        
    }


    function computerTurn(){

        if(isGameOver){
            return
        }
        
        

        const cordX = randomNumber()
        const cordY = randomNumber()

        if(playerHuman.gameboard.board[cordX][cordY] == 'miss' || playerHuman.gameboard.board[cordX][cordY] == 'hit'){
            turn = playerHuman
            nextTurn()
            return
           
        }

        setTimeout(attackSquare, 400)

        function attackSquare(){
            let hit = playerHuman.gameboard.receiveAttack(cordX, cordY)

        renderBoard(playerHuman)
        renderBoard(playerComputer)

        if(playerHuman.gameboard.isGameOver()){
            handleGameOver(playerComputer)
        }

        if(hit){
            turn = playerHuman
            nextTurn()
            return
        }

        nextTurn()

        }

    


    }


    function randomNumber(){
        return Math.floor(Math.random() * 10)
    }

    function randomDirection(){
        return (Math.random() > 0.5) ? 'vertical' : 'horizontal'
    }


    return {playerHuman, playerComputer, randomPlacement, playerTurn}

}