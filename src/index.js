import "./styles.css"
import { generateBoard, prepareComputerBoard } from "./domRender"
import { Gameboard } from "./gameboard"
import { Driver } from "./driver"

let driver = Driver()



generateBoard(driver)

const randomizeButton = document.querySelector(".randomize")
const startButton = document.querySelector(".start")
const wonStatus = document.querySelector("h3")

randomizeButton.addEventListener("click", (e) => {
    driver = Driver()
    wonStatus.classList.remove("visible")
    generateBoard(driver)
})

startButton.addEventListener("click", (e) => {
    prepareComputerBoard(driver)

})