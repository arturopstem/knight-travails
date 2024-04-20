import Queue from './queue';
import Square from './square';
import traversal from './traversal';

function knightMoves(start, end) {
  if (!Square.isValid(start) || !Square.isValid(end)) {
    return;
  }
  if (Square.areEqual(start, end)) {
    return;
  }

  const board = new Map();
  const queue = new Queue();
  const startingSquare = new Square(start);

  board.set(`${startingSquare}`, startingSquare);
  queue.enqueue(start);

  traversal(queue, board, end);

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
