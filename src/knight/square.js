const BOARD_SIZE = 8;
const OFFSETS = [
  [-1, 2],
  [1, 2],
  [-1, -2],
  [1, -2],
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
];

class Square {
  constructor([row, col], previousSquare = null, moves = 0) {
    this.row = row;
    this.col = col;
    this.previousSquare = previousSquare;
    this.moves = moves;
  }

  toString() {
    return `${this.row}-${this.col}`;
  }

  static coordToStr([row, col]) {
    return `${row}-${col}`;
  }

  static isValid([row, col]) {
    return row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE;
  }

  getPossibleMoves() {
    const { row, col } = this;
    const moves = OFFSETS.map(([rowOffset, colOffset]) => [
      row + rowOffset,
      col + colOffset,
    ]);

    return moves.filter(Square.isValid);
  }

  static areEqual(a, b) {
    return Square.coordToStr(a) === Square.coordToStr(b);
  }
}

export default Square;
