
export function Gameboard(){
    let board = Array.from(Array(10), () => new Array(10))

    function place(x, y, ship, orientation){
        let length = ship.length

        if(!inbound(x,y,ship,orientation)){
            throw new Error('Coordinates out of bounds!')
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
        
    }


    return {board, place}

}