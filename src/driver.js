import { Player } from "./player"
import { generateBoard } from "./domRender"
import { Ship } from "./ship"

export function Driver(){
    let playerHuman = Player('human')
    let playerComputer = Player('computer')


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


    function randomNumber(){
        return Math.floor(Math.random() * 10)
    }

    function randomDirection(){
        return (Math.random() > 0.5) ? 'vertical' : 'horizontal'
    }


    return {playerHuman, playerComputer, randomPlacement}

}