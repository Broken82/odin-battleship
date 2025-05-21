import "./styles.css"
import { generateBoard } from "./domRender"
import { Gameboard } from "./gameboard"
import { Driver } from "./driver"

let driver = Driver()



generateBoard(driver)

const randomizeButton = document.querySelector(".randomize")

randomizeButton.addEventListener("click", (e) => {
    driver = Driver()
    generateBoard(driver)
})