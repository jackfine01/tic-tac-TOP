// Console Edition Time

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

    const gameboard = [cellTR, cellTC, cellTL, cellMR, cellMC, cellML, cellBR, cellBC, cellBL];

    return{gameboard};
};
const gameboard = createGameboard();
// Second, create Teams with player objects

function createPlayerOne(){
    const owning = 1;
    return{owning};
};
const PlayerOne = createPlayerOne();
function createPlayerTwo(){
    const owning = 2;
    return{owning};
};
const PlayerTwo = createPlayerTwo();

// Third, create a take cell function