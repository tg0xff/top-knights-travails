// Cache valid moves per square. The first dimension is x, second is
// y, and third is an array of arrays, each representing a valid move.
export default function validMoves() {
  return [[[[2,1],[1,2]],[[2,2],[2,0],[1,3]],[[2,3],[2,1],[1,4],[1,0]],[[2,4],[2,2],[1,5],[1,1]],[[2,5],[2,3],[1,6],[1,2]],[[2,6],[2,4],[1,7],[1,3]],[[2,7],[2,5],[1,4]]],[[[3,1],[2,2],[0,2]],[[3,2],[3,0],[2,3],[0,3]],[[3,3],[3,1],[2,4],[2,0],[0,4],[0,0]],[[3,4],[3,2],[2,5],[2,1],[0,5],[0,1]],[[3,5],[3,3],[2,6],[2,2],[0,6],[0,2]],[[3,6],[3,4],[2,7],[2,3],[0,7],[0,3]],[[3,7],[3,5],[2,4],[0,4]]],[[[4,1],[3,2],[1,2],[0,1]],[[4,2],[4,0],[3,3],[1,3],[0,2],[0,0]],[[4,3],[4,1],[3,4],[3,0],[1,4],[1,0],[0,3],[0,1]],[[4,4],[4,2],[3,5],[3,1],[1,5],[1,1],[0,4],[0,2]],[[4,5],[4,3],[3,6],[3,2],[1,6],[1,2],[0,5],[0,3]],[[4,6],[4,4],[3,7],[3,3],[1,7],[1,3],[0,6],[0,4]],[[4,7],[4,5],[3,4],[1,4],[0,7],[0,5]]],[[[5,1],[4,2],[2,2],[1,1]],[[5,2],[5,0],[4,3],[2,3],[1,2],[1,0]],[[5,3],[5,1],[4,4],[4,0],[2,4],[2,0],[1,3],[1,1]],[[5,4],[5,2],[4,5],[4,1],[2,5],[2,1],[1,4],[1,2]],[[5,5],[5,3],[4,6],[4,2],[2,6],[2,2],[1,5],[1,3]],[[5,6],[5,4],[4,7],[4,3],[2,7],[2,3],[1,6],[1,4]],[[5,7],[5,5],[4,4],[2,4],[1,7],[1,5]]],[[[6,1],[5,2],[3,2],[2,1]],[[6,2],[6,0],[5,3],[3,3],[2,2],[2,0]],[[6,3],[6,1],[5,4],[5,0],[3,4],[3,0],[2,3],[2,1]],[[6,4],[6,2],[5,5],[5,1],[3,5],[3,1],[2,4],[2,2]],[[6,5],[6,3],[5,6],[5,2],[3,6],[3,2],[2,5],[2,3]],[[6,6],[6,4],[5,7],[5,3],[3,7],[3,3],[2,6],[2,4]],[[6,7],[6,5],[5,4],[3,4],[2,7],[2,5]]],[[[7,1],[6,2],[4,2],[3,1]],[[7,2],[7,0],[6,3],[4,3],[3,2],[3,0]],[[7,3],[7,1],[6,4],[6,0],[4,4],[4,0],[3,3],[3,1]],[[7,4],[7,2],[6,5],[6,1],[4,5],[4,1],[3,4],[3,2]],[[7,5],[7,3],[6,6],[6,2],[4,6],[4,2],[3,5],[3,3]],[[7,6],[7,4],[6,7],[6,3],[4,7],[4,3],[3,6],[3,4]],[[7,7],[7,5],[6,4],[4,4],[3,7],[3,5]]],[[[7,2],[5,2],[4,1]],[[7,3],[5,3],[4,2],[4,0]],[[7,4],[7,0],[5,4],[5,0],[4,3],[4,1]],[[7,5],[7,1],[5,5],[5,1],[4,4],[4,2]],[[7,6],[7,2],[5,6],[5,2],[4,5],[4,3]],[[7,7],[7,3],[5,7],[5,3],[4,6],[4,4]],[[7,4],[5,4],[4,7],[4,5]]]];
}
