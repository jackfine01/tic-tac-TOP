
// First, create Gameboard with cell objects

function createGameboard(){
    const cellTR = {xcord: 1, ycord: 1, owner: 0};
    const cellTC = {xcord: 2, ycord: 1, owner: 0};
    const cellTL = {xcord: 3, ycord: 1, owner: 0};

    const cellMR = {xcord: 1, ycord: 2, owner: 0};
    const cellMC = {xcord: 2, ycord: 2, owner: 0};
    const cellML = {xcord: 3, ycord: 2, owner: 0};

    const cellBR = {xcord: 1, ycord: 3, owner: 0};
    const cellBC = {xcord: 2, ycord: 3, owner: 0};
    const cellBL = {xcord: 3, ycord: 3, owner: 0};

    const gameboard =  [cellTR, cellTC, cellTL, 
                        cellMR, cellMC, cellML, 
                        cellBR, cellBC, cellBL];

    return gameboard;
};
const gameboard = createGameboard();
// Second, create Teams with player objects

function createPlayer(id){
    return{ id };
};
const PlayerOne = createPlayer(1);
const PlayerTwo = createPlayer(2);

// Third, create a take cell function

function takeCell(cell, player){
    if(cell.owner===0){
    cell.owner = player.id;
    }
    const winner = checkWin(gameboard, player);
    if(winner){
        console.log(winner);
    }
    else{
        console.log('no winner'); 
    }
};

// Fourth, set up winning and tying logic.

function checkWin(gameboard, player){

    function checkLine(a,b,c){
        if(gameboard[a].owner===gameboard[b].owner &&
            gameboard[b].owner===gameboard[c].owner &&
            gameboard[a].owner !==0){
                return player.id;
            }
                else
                return 0;
    };         

        if(checkLine(0,1,2)) return player.id;
        if(checkLine(3,4,5)) return player.id;
        if(checkLine(6,7,8)) return player.id;
        if(checkLine(0,3,6)) return player.id;
        if(checkLine(1,4,7)) return player.id;
        if(checkLine(2,5,8)) return player.id;
        if(checkLine(0,4,8)) return player.id;
        if(checkLine(2,4,8)) return player.id;

};