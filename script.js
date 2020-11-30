let board = [
    [null, null, null, "S", null],
    [null, "S", null, "S", null ],
    ["S", null, null, null, null ],
    [null, "S", null, null, null],
    [null, null, null, null, "S"]
]

for (let i = 0; i < 10; i++){

    let randomRow = Math.floor(Math.random() * board.length);
    let randomColumn = Math.floor(Math.random() * board[randomRow].length);

    if (board[randomRow][randomColumn] === "S"){
        board[randomRow][randomColumn] = null;
        console.log("Ship at [" + randomRow + "], [" + randomColumn + "] has sunk!");
    } else { console.log("No hit :,( "); }

}