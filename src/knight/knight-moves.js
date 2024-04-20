import Queue from './queue';
import Square from './square';

function knightMoves(start, end) {
  if (!Square.isValid(start) || !Square.isValid(end)) {
    return;
  }
  if (Square.areEqual(start, end)) {
    return;
  }

  const board = new Map();
  const queue = new Queue();

  board.set(Square.coordToStr(start), new Square(start));
  queue.enqueue(start);

  function traversal() {
    const coordinate = queue.peek();

    const square = board.get(Square.coordToStr(coordinate));
    const possibleMoves = square.getPossibleMoves();
    const { length } = possibleMoves;

    for (let i = 0; i < length; i += 1) {
      const move = possibleMoves[i];
      const moveKey = Square.coordToStr(move);

      if (!board.has(moveKey)) {
        const newSquare = new Square(move, square, square.moves + 1);
        board.set(`${newSquare}`, newSquare);
        queue.enqueue(move);
      }

      if (Square.areEqual(move, end)) {
        return;
      }
    }

    queue.dequeue();
    traversal();
  }

  traversal();

  const path = [];

  let square = board.get(Square.coordToStr(end));
  console.log(`You made it in ${square.moves} moves! Here's your path:`);

  while (square) {
    path.push([square.row, square.col]);
    square = square.previousSquare;
  }

  path.reverse();
  path.forEach((point) => console.log(point));
}

export default knightMoves;
