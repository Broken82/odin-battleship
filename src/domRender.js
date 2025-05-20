

export function generateBoard(){

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

    //for computer
        for(let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            let cell = document.createElement("div")
            cell.classList.add("grid-element")

            computerBoard.append(cell)
        }
    }



}