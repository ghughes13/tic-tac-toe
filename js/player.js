class Player {
  constructor(name, isTurn, symbol) {
    this.name = name;
    this.isTurn = isTurn;
    this.symbol = symbol;
  }
}

let player1 = new Player('Garrett', true, 'X');
let player2 = new Player('John', false, 'O');
