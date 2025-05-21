

export function generateBoard(driver){
    let userBoard = document.querySelector(".player-grid")
    let computerBoard = document.querySelector(".computer-grid")

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