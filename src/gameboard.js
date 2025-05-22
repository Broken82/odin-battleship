
export function Gameboard(){
    let board = Array.from(Array(10), () => new Array(10))

    function place(x, y, ship, orientation){
        let length = ship.length

        if(!inbound(x,y,ship,orientation)){
            return false
        }

        if(!collision(x,y,ship,orientation)){
            return false
        }

        if(orientation == 'vertical'){
            for(let i = x; i < x + length; i++){
                this.board[i][y] = ship
            }
        }
        else{
            for(let i = y; i < y + length; i++){
                this.board[x][i] = ship
            }
        }

        return true

        
    }

    function collision(x, y, ship, orientation){
        let length = ship.length
        console.log(ship)
                console.log("x: " + x )
                console.log(" y: " + y )
                console.log("orientation: " + orientation)
                console.log(board)
        if(orientation == 'vertical'){
            for(let i = x; i < x + length; i++){
                if(board[i][y] != null){

                    return false
                }
            }
        }
        else{
            for(let i = y; i < y + length; i++){
                if(board[x][i] != null){
                    return false
                }
            }
        }
        return true
    }

    function inbound(x, y, ship, orientation){

        let length = ship.length

        if(x < 0 || y < 0){
            return false
        }

        if(orientation == 'vertical' &&  x + length - 1 > board.length - 1) return false;
        if(orientation == 'horizontal' && y + length - 1 > board.length - 1) return false;

        return true
    }

    function receiveAttack(x, y){

        //cell that was hit
        if(this.board[x][y] == "hit" || this.board[x][y == "miss"]){
            return false
        }

        //empty cell
        if(this.board[x][y] == null){
            this.board[x][y] = "miss"
            return false
        }

        //else its a ship
        this.board[x][y] = "hit"
        console.log("ship was hit")
        return true
    }

    function isGameOver(){
        let length = this.board.length

        for(let i = 0; i < length - 1; i++ ){
            for(let j = 0; j < length - 1; j++){
                if(this.board[i][j] != "hit" && this.board[i][j] != null && this.board[i][j] != 'miss'){
                    return false
                }
            }
        }

        return true

    }


    return {board, place, receiveAttack, isGameOver}

}