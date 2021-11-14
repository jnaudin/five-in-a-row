const nbLeft: countProps = (grid, line, col) => {
  let nbBox = 0;
  for (
    let colc = col - 1;
    colc >= 0 && grid[line][colc] === grid[line][col];
    colc--
  ) {
    nbBox++;
  }
  return nbBox;
};

const nbUpLeft: countProps = (grid, line, col) => {
  let nbBox = 0;
  for (
    let colc = col - 1, linec = line - 1;
    colc >= 0 && linec >= 0 && grid[linec][colc] === grid[line][col];
    colc--, linec--
  ) {
    nbBox++;
  }
  return nbBox;
};

const nbDownLeft: countProps = (grid, line, col, nbLines) => {
  let nbBox = 0;
  for (
    let colc = col - 1, linec = line + 1;
    colc >= 0 && linec < nbLines && grid[linec][colc] === grid[line][col];
    colc--, linec++
  ) {
    nbBox++;
  }
  return nbBox;
};

const nbRight: countProps = (grid, line, col, nbLines, nbCols) => {
  let nbBox = 0;
  for (
    let colc = col + 1;
    colc < nbCols && grid[line][colc] === grid[line][col];
    colc++
  ) {
    nbBox++;
  }
  return nbBox;
};

const nbUpRight: countProps = (grid, line, col, nbLines, nbCols) => {
  let nbBox = 0;
  for (
    let colc = col + 1, linec = line - 1;
    colc < nbCols && linec >= 0 && grid[linec][colc] === grid[line][col];
    colc++, linec--
  ) {
    nbBox++;
  }
  return nbBox;
};

const nbDownRight: countProps = (grid, line, col, nbLines, nbCols) => {
  let nbBox = 0;
  for (
    let linec = line + 1, colc = col + 1;
    linec < nbLines && colc < nbCols && grid[linec][colc] === grid[line][col];
    linec++, colc++
  ) {
    nbBox++;
  }
  return nbBox;
};

const nbUp: countProps = (grid, line, col) => {
  let nbBox = 0;
  for (
    let linec = line - 1;
    linec >= 0 && grid[linec][col] === grid[line][col];
    linec--
  ) {
    nbBox++;
  }
  return nbBox;
};

const nbDown: countProps = (grid, line, col, nbLines) => {
  let nbBox = 0;
  for (
    let linec = line + 1;
    linec < nbLines && grid[linec][col] === grid[line][col];
    linec++
  ) {
    nbBox++;
  }
  return nbBox;
};

type countProps = (
  grid: string[][],
  line: number,
  col: number,
  nbLines?: number,
  nbCols?: number
) => number;
type CheckWinProps = (
  grid: string[][],
  line: number,
  col: number,
  nbLines: number,
  nbCols: number
) => boolean;

export const checkWin: CheckWinProps = (grid, line, col, nbLines, nbCols) =>
  nbLeft(grid, line, col, nbLines, nbCols) +
    nbRight(grid, line, col, nbLines, nbCols) >=
    4 ||
  nbUpLeft(grid, line, col, nbLines, nbCols) +
    nbDownRight(grid, line, col, nbLines, nbCols) >=
    4 ||
  nbDownLeft(grid, line, col, nbLines) +
    nbUpRight(grid, line, col, nbLines, nbCols) >=
    4 ||
  nbUp(grid, line, col, nbLines, nbCols) +
    nbDown(grid, line, col, nbLines, nbCols) >=
    4;
