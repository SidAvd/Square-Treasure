import { createBoard } from "../utils/createBoard";

export function gameReducer(state, action){
    const {type, row, col} = action;

    switch (type){
        case "HANDLE_CELL": {
            if (state.board[row][col].isFlipped || state.isWin) return {...state}
            return{
                ...state,
                board: flipCell(row, col, state.board),
                isWin: winCheck(state.board),
                counterMoves: state.counterMoves + 1
            }
        }
        case "HANDLE_RESTART_BUTTON":{
            return{
                ...state,
                board: restartGame(state.board),
                isWin: false,
                counterMoves: 0
            }
        }
        default:{
            console.log('error, unknown action!');
        }
    }
}

function restartGame(board){
    return createBoard(board.length, board[0].length);
}

function winCheck(board){
    const newBoard = board.slice();
    for(let row = 0; row < newBoard.length; row++){
        for(let col = 0; col < newBoard[0].length; col++){
            if (newBoard[row][col].squareText == 'T' && newBoard[row][col].isFlipped)
                return true;
        }
    }
    return false;
}

function flipCell(row, col, board){
    const newBoard = board.slice(); // creates copy of array
    const cell = newBoard[row][col];
    const newCell = {
        ...cell,
        isFlipped: true
    }
    newBoard[row][col] = newCell;
    return newBoard;
}

