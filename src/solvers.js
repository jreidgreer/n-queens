/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution;
  var board = new Board({'n': n});

  var testRow = function(currentRow, currentBoard) {
    var testBoard = {};
    _.extend(testBoard, currentBoard);
    for (var i = 0; i < n; i++) {

      var testRows = testBoard.rows();
      testRows[currentRow][i] = 1;

      if (!testBoard.hasAnyRooksConflicts()) {
        if (currentRow === testBoard.rows().length - 1) {
          solution = testBoard.rows();
        } else {
          testRow(currentRow + 1, testBoard);
        }
      } else {
        testRows[currentRow][i] = 0;
      }
    } 
  };

  testRow(0, board);

  //return solution matrix variable
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  var board = new Board({'n': n});

  var testRow = function(currentRow, currentBoard) {
    var testBoard = {};
    _.extend(testBoard, currentBoard);
    for (var i = 0; i < n; i++) {

      var testRows = testBoard.rows();
      testRows[currentRow][i] = 1;

      if (!testBoard.hasAnyRooksConflicts()) {
        if (currentRow === testBoard.rows().length - 1) {
          solutionCount++;
        } else {
          testRow(currentRow + 1, testBoard);
        }
      }
      testRows[currentRow][i] = 0;
    } 
  };

  testRow(0, board);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({'n': 0}).rows();
  var isSolved = false;
  var board = new Board({'n': n});

  if (n === 0 || n === 2 || n === 3) {
    return board.rows();
  }

  var testRow = function(currentRow, currentBoard) {
    if (isSolved) {
      return;
    }
    var testBoard = {};
    _.extend(testBoard, currentBoard);
    // if ( n === 4 && testBoard.rows()[0][1] === 1 && testBoard.rows()[1][3] === 1 && testBoard.rows()[2][0] && testBoard.rows[3][2]) {
    //   debugger;
    // }
    for (var i = 0; i < n; i++) {

      var testRows = testBoard.rows();
      testRows[currentRow][i] = 1;

      if (!testBoard.hasAnyQueensConflicts()) {
        if (currentRow === testBoard.rows().length - 1) {
          solution = testBoard.rows();
          isSolved = true;
          console.log(solution);
          break;
        } else {
          testRow(currentRow + 1, testBoard);
        }
      } 
      if (isSolved) {
        return;
      }
      testRows[currentRow][i] = 0;
    } 
  };

  testRow(0, board);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
