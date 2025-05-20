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

test('can send an attack', () => {
    let board = Gameboard()

    expect(board.receiveAttack(0,0)).toBe(false)
})


test('returns true when ship is hit', () => {
    let ship = Ship(2)
    let board = Gameboard()

    board.place(0,0,ship,'vertical')

    expect(board.receiveAttack(0,0)).toBe(true)
})


test('game ends', () => {
    let ship = Ship(1)
    let board = Gameboard()

    board.place(0,0,ship,'vertical')
    board.receiveAttack(0,0)

    expect(board.isGameOver()).toBe(true)
})


