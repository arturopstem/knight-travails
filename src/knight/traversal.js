import Square from './square';

function traversal(queue, board, end) {
  const traversalHelper = () => {
    const coordinate = queue.peek();

    const square = board.get(Square.coordToStr(coordinate));
    const possibleMoves = square.getPossibleMoves();
    const numberOfMoves = possibleMoves.length;

    for (let i = 0; i < numberOfMoves; i += 1) {
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
    traversalHelper();
  };

  traversalHelper();
}

export default traversal;
