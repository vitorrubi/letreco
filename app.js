const tiles = document.querySelector(".tile-container")
const backspaceAndEnterRow = document.querySelector("#backspaceAndEnterRow")
const keyboardFirstRow = document.querySelector("#keyboardFirstRow")
const keyboardSecondRow = document.querySelector("#keyboardSecondRow")
const keyboardThirdRow = document.querySelector("#keyboardThirdRow")

const keysFirstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keysSecondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keysThirdRow = ["Z", "X", "C", "V", "B", "N", "M"]


const rows = 6
const columns = 5
let currentRow = 0
let currentColumn = 0
const letreco = "vasco"
const guesses = []

for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const tileRow = document.createElement("div")
    tileRow.setAttribute("id", "row" + rowIndex)
    tileRow.setAttribute("class", "tile-row")
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
        const tileColumn = document.createElement("div")
        tileColumn.setAttribute("id", "row" + rowIndex + "column" + columnIndex)
        tileColumn.setAttribute("class", "tile-column")
        tileRow.append(tileColumn)
    }
    tiles.append(tileRow)
}

const handleKeyboardOnClick = (key) => {
    if(currentColumn === columns){
        return
    }
    const currentTile = document.querySelector("#row" + currentRow + "column" + currentColumn);
    currentTile.textContent = key
   
    currentColumn++
    
}
const creatKeyboardRow = (keys, keyboardRow) => {
    keys.forEach((key) => {
        var buttonElement = document.createElement("button")
        buttonElement.textContent = key
        buttonElement.setAttribute("id", key)
        buttonElement.addEventListener("click", () => handleKeyboardOnClick(key));
        keyboardRow.append(buttonElement)
    })
}

creatKeyboardRow(keysFirstRow, keyboardFirstRow)
creatKeyboardRow(keysSecondRow, keyboardSecondRow)
creatKeyboardRow(keysThirdRow, keyboardThirdRow)

const handleBackspace = () => {
    console.log("apaga")
}

const backspaceButton = document.createElement("button")
backspaceButton.addEventListener("click", handleBackspace)
backspaceButton.textContent = "<"
backspaceAndEnterRow.append(backspaceButton)

const handleEnter = () => {
    console.log("verifica palavra")
}

const enterButton = document.createElement("button")
enterButton.addEventListener("click", handleEnter)
enterButton.textContent = "ENTER"
backspaceAndEnterRow.append(enterButton)

