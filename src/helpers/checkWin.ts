const nbLeft: countProps = (grid, line, col) => {
  let nbBox = 0;
  for (
    let colc = col - 1;
    colc > 0 && grid[line][colc] === grid[line][col];
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
    colc > 0 && linec > 0 && grid[linec][colc] === grid[line][col];
    colc--, linec--
  ) {
    nbBox++;
  }
  return nbBox;
};

const nbDownLeft: countProps = (grid, line, col) => {
  let nbBox = 0;
  for (
    let colc = col - 1, linec = line + 1;
    colc > 0 && linec < 25 && grid[linec][colc] === grid[line][col];
    colc--, linec++
  ) {
    nbBox++;
  }
  return nbBox;
};

const nbRight: countProps = (grid, line, col) => {
  let nbBox = 0;
  for (
    let colc = col + 1;
    colc < 25 && grid[line][colc] === grid[line][col];
    colc++
  ) {
    nbBox++;
  }
  return nbBox;
};

const nbUpRight: countProps = (grid, line, col) => {
  let nbBox = 0;
  for (
    let colc = col + 1, linec = line - 1;
    colc < 25 && linec > 0 && grid[linec][colc] === grid[line][col];
    colc++, linec--
  ) {
    nbBox++;
  }
  return nbBox;
};

const nbDownRight: countProps = (grid, line, col) => {
  let nbBox = 0;
  for (
    let linec = line + 1, colc = col + 1;
    linec < 25 && colc < 25 && grid[linec][colc] === grid[line][col];
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

const nbDown: countProps = (grid, line, col) => {
  let nbBox = 0;
  for (
    let linec = line + 1;
    linec < 25 && grid[linec][col] === grid[line][col];
    linec++
  ) {
    nbBox++;
  }
  return nbBox;
};

type countProps = (grid: string[][], line: number, col: number) => number;
type CheckWinProps = (grid: string[][], line: number, col: number) => boolean;

export const checkWin: CheckWinProps = (grid, line, col) =>
  nbLeft(grid, line, col) + nbRight(grid, line, col) >= 4 ||
  nbUpLeft(grid, line, col) + nbDownRight(grid, line, col) >= 4 ||
  nbDownLeft(grid, line, col) + nbUpRight(grid, line, col) >= 4 ||
  nbUp(grid, line, col) + nbDown(grid, line, col) >= 4;
