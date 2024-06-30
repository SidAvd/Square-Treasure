import { createCell } from "./createCell";

export function createBoard(numberOfRows, numberOfColumns){
    const treasureRow = Math.floor(Math.random() * numberOfRows);
    const treasureCol = Math.floor(Math.random() * numberOfColumns);
    const matrix = [];
    for(let row = 0; row < numberOfRows; row++){
        const newRow = [];
        for(let col = 0; col < numberOfColumns; col++){
            let thisSquareInfoText = (Math.abs(treasureRow-row) + Math.abs(treasureCol-col));
            if (thisSquareInfoText == 0)
            {
                thisSquareInfoText = "T";
            }
            else if (thisSquareInfoText > 3)
            {
                thisSquareInfoText = "?";
            }
            newRow.push(createCell(row, col, false, thisSquareInfoText));
        }
        matrix.push(newRow);
    }
    return matrix;
}