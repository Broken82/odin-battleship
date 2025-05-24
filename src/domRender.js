
let userBoard = document.querySelector(".player-grid")
let computerBoard = document.querySelector(".computer-grid")
let wonStatus = document.querySelector("h3")

export function generateBoard(driver){


    userBoard.innerHTML = ''
    computerBoard.innerHTML = ''
    computerBoard.classList.add('disabled')

    //for user
    for(let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            let cell = document.createElement("div")
            cell.classList.add("grid-element")
            cell.dataset.x = i;
            cell.dataset.y = j;

            userBoard.append(cell)
        }
    }
    //place random ships
    driver.randomPlacement(driver.playerHuman)
    renderShips(userBoard, driver)
   
    //for computer
        for(let i = 0; i < 10; i++){
            for (let j = 0; j < 10; j++){
                let cell = document.createElement("div")
                cell.classList.add("grid-element")
                cell.dataset.x = i;
                cell.dataset.y = j;


                computerBoard.append(cell)
            }
    }
     driver.randomPlacement(driver.playerComputer)


}

function renderShips(board, driver){
    console.log(board.children)

    for(let cell of board.children){
        if(driver.playerHuman.gameboard.board[cell.dataset.x][cell.dataset.y] != null){
            cell.classList.add("ship")
        }
    }


}

export function prepareComputerBoard(driver){
    computerBoard.classList.remove('disabled')
    // Add listeners

    for(let cell of computerBoard.children){
        cell.addEventListener("click", (e) => {
            const cordX = cell.dataset.x
            const cordY = cell.dataset.y
            console.log(cell)
            console.log(cordY)

            driver.playerTurn(cordX, cordY)
            
        })
    }

}


export function renderBoard(player){


    //for computer
    if(player.name == 'computer'){
            for(let cell of computerBoard.children){
            const cordX = cell.dataset.x
            const cordY = cell.dataset.y
        
            let currCell = player.gameboard.board[cordX][cordY]
        
            cell.classList.remove('hit')
            cell.classList.remove('miss')
        
            if(currCell == 'hit') cell.classList.add('hit')
            else if(currCell == 'miss') cell.classList.add('miss')

        }
        
    }
    else{
    //for Player
    for(let cell of userBoard.children){
        const cordX = cell.dataset.x
        const cordY = cell.dataset.y

        let currCell = player.gameboard.board[cordX][cordY]

        cell.classList.remove('hit')
        cell.classList.remove('miss')
        cell.classList.remove('ship')

        if(currCell == 'hit') cell.classList.add('hit')
        else if(currCell == 'miss') cell.classList.add('miss')
        else if(currCell != null) cell.classList.add('ship')
    }
    }




}


export function displayWinner(player){
    if(player.name == 'human'){
        wonStatus.innerHTML = 'You win!'
    }
    else{
        wonStatus.innerHTML = 'Computer wins!'
    }
    wonStatus.classList.add('visible')
}