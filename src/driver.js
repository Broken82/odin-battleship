import { Player } from "./player"
import { Ship } from "./ship"
import { renderBoard } from "./domRender"

export function Driver(){
    let playerHuman = Player('human')
    let playerComputer = Player('computer')
    let turn = playerHuman


    function onStart(){



    }


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

        //Doesn't count already clicked cells
        if(this.playerComputer.gameboard.board[x][y] == 'miss' || this.playerComputer.gameboard.board[x][y] == 'hit'){
            return
        }

        //Hit and save if was hit
        let Hit = this.playerComputer.gameboard.receiveAttack(x,y)
        
        

        renderBoard(playerHuman)
        renderBoard(playerComputer)

        if(Hit){
            return
        }



    }


    function nextTurn(){
        if(this.turn == this.playerHuman){
            this.turn = this.playerComputer
            //computerTurn()
        }
        else{
            //Normal player turn
            this.turn = this.playerHuman
            return
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