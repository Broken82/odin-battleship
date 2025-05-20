import { Gameboard } from "./gameboard";


export function Player(name){
    let gameboard = Gameboard()
    return {name, gameboard}

}