
class TicTacToe {
    constructor() {
        this.field=[
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ];
        this.simbol='x';
        this.amount=0;
    }

    getCurrentPlayerSymbol() {
        return this.simbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex]==null)
        {
            this.amount++;
            this.field[rowIndex][columnIndex]=this.simbol;
            if(this.simbol==='x') this.simbol='o';
            else this.simbol='x';
        }
    }

    isFinished() {
        if(this.getWinner()||this.isDraw())return true;
        return false;
    }

    getWinner() {
        if(this.field[0][0]==this.field[0][1]&&this.field[0][1]==this.field[0][2])return this.field[0][0];
        if(this.field[1][0]==this.field[1][1]&&this.field[1][2]==this.field[1][1])return this.field[1][0];
        if(this.field[2][0]==this.field[2][1]&&this.field[2][1]==this.field[2][2])return this.field[2][0];
        if(this.field[0][0]==this.field[1][1]&&this.field[2][2]==this.field[1][1])return this.field[0][0];
        if(this.field[0][0]==this.field[1][0]&&this.field[1][0]==this.field[2][0])return this.field[0][0];
        if(this.field[2][0]==this.field[1][1]&&this.field[0][2]==this.field[2][0])return this.field[2][0];
        if(this.field[0][1]==this.field[1][1]&&this.field[2][1]==this.field[1][1])return this.field[1][1];
        if(this.field[0][2]==this.field[1][2]&&this.field[1][2]==this.field[2][2])return this.field[2][2];
        return null;
    }

    noMoreTurns() {
        if(this.amount<9) return false;
        return true; 
    }

    isDraw() {
        if(this.noMoreTurns()&&!this.getWinner())
        return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
