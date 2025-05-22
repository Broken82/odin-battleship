import "./styles.css"
import { generateBoard, prepareComputerBoard } from "./domRender"
import { Gameboard } from "./gameboard"
import { Driver } from "./driver"

let driver = Driver()



generateBoard(driver)

const randomizeButton = document.querySelector(".randomize")
const startButton = document.querySelector(".start")

randomizeButton.addEventListener("click", (e) => {
    driver = Driver()
    generateBoard(driver)
})

startButton.addEventListener("click", (e) => {
    prepareComputerBoard(driver)

})