const tiles = document.querySelector(".tile-container")
const backspaceAndEnterRow = document.querySelector ("#backspaceAndEnterRow")
const keyboardFirstRow = document.querySelector ("#keyboardFirstRow")
const keyboardSecondRow = document.querySelector ("#keyboardSecondRow")
const keyboardThirdRow = document.querySelector ("#keyboardThirdRow")

const keysFirstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keysSecondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keysThirdRow = ["Z", "X", "C", "V", "B", "N", "M"]


const rows = 6
const columns = 5

for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const tileRow = document.createElement("div")
    tileRow.setAttribute("id", "row"+rowIndex)
    tileRow.setAttribute ("class", "tile-row")
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
        const tileColumn = document.createElement("div")
        tileColumn.setAttribute("id","row"+rowIndex+"column"+columnIndex)
        tileColumn.setAttribute("class","tile-column")
        tileRow.append(tileColumn)
    }
    tiles.append(tileRow)
}

keysFirstRow.forEach ((key) => {
    var buttonElement = document.createElement ("button")
    buttonElement.textContent = key
    buttonElement.setAttribute("id", key)
    buttonElement.addEventListener("click", () => console.log ("TECLA: ", key))
    keyboardFirstRow.append(buttonElement)
}

)