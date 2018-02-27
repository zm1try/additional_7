module.exports = function solveSudoku(matrix) {
  
  startSolveFrom(0, 0);

  return matrix;

  function startSolveFrom(r, c) {
    if (matrix[r][c] === 0) {
      for (let i = 1; i <= 9; i++) {
        matrix[r][c] = i;
        if (checkRow(r, c) && checkCol(r, c) && checkSection(r, c)) {
          if (startSolveFrom(r, c)) {
            return true;
          }
        }
      }
      matrix[r][c] = 0;
      return false;
    } else {
      c++;
      if (c >= 9) {
        c = 0;
        r++;
        if (r >= 9) return true;
      }
      if (startSolveFrom(r, c)) {
        return true;
      }
    }
  };

  function checkRow(r, c) {
    let value = matrix[r][c];
    for (let cc = 0; cc < 9; cc++) {
      if (cc !== c && matrix[r][cc] === value) {
        return false;
      }
    }
    return true;
  };

  function checkCol(r, c) {
    let value = matrix[r][c];
    for (let rr = 0; rr < 9; rr++) {
      if (rr !== r && matrix[rr][c] === value) {
        return false;
      }
    }
    return true;
  };

  function checkSection(r, c) {
    let value = matrix[r][c];
    let checkSectionRow = Math.floor(r / 3);
    let checkSectionCol = Math.floor(c / 3);
    for (let rr = checkSectionRow * 3; rr < checkSectionRow * 3 + 3; rr++) {
      for (let cc = checkSectionCol * 3; cc < checkSectionCol * 3 + 3; cc++) {
        if (rr !== r && cc !== c && matrix[rr][cc] === value) {
          return false;
        }
      }
    }
    return true;
  };

}
