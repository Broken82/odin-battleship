import { Ship } from "../ship"

test('returns length', () => {

    expect(Ship(3).length).toBe(3)
})


test('increases hit times', ()=>{

    const ship = Ship(3)
    ship.hit()
    expect(ship.hitTimes).toBe(1)

})


test('returns isSunk', () => {
    expect(Ship(3).isSunk()).toBe(false)
})

test('returns isSunk true', () => {
    let ship = Ship(1)
    ship.hit()
    expect(ship.isSunk()).toBe(true)
})