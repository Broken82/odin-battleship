export function Ship(length){

    let hitTimes = 0

    function hit(){
        this.hitTimes++
    }

    function isSunk(){
        return this.hitTimes >= length
    }
    

    return {length, hitTimes, isSunk, hit}

}