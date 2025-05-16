import { Gameboard } from "../gameboard";
import { Ship } from "../ship";

test('places a ship on board', () => {
    let ship = Ship(2)
    let board = Gameboard()

    board.place(0,0,ship,'vertical')


    expect(board.board[0][0]).toBe(ship)
    
})

test('cant place ships out of bounds', () =>{
    let ship = Ship(2)
    let board = Gameboard()

    

    expect(() => {
        board.place(10,10,ship,'vertical')
    }
    ).toThrow(Error)
})