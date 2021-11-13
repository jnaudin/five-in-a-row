function nbLeft(grid, y, x) {
    let nbBox = 0;
    for (let xc = x - 1; xc > 0 && grid[y][xc] === grid[y][x]; xc--){
      nbBox++;
    }
    return nbBox;
  }
  
  function nbUpLeft(grid, y, x) {
    let nbBox = 0;
    for (
      let xc = x - 1, yc = y - 1;
      xc > 0 && yc > 0 && grid[yc][xc] === grid[y][x];
      xc--, yc--
    ) {
      nbBox++;
    }
    return nbBox;
  }
  
  function nbDownLeft(grid, y, x) {
    let nbBox = 0;
    console.log("xy",y, x)
    for (
      let xc = x - 1, yc = y + 1;
      xc > 0 && yc < 25 && grid[yc][xc] === grid[y][x];
      xc--, yc++
    ) {
        console.log("++")
      nbBox++;
    }
    return nbBox;
  }

  function nbRight(grid, y, x) {
    let nbBox = 0;
    for (let xc = x + 1; xc < 25 && grid[y][xc] === grid[y][x]; xc++) {
      nbBox++;
    }
    return nbBox;
  }
  
  function nbUpRight(grid, y, x) {
    let nbBox = 0;
    for (
      let xc = x + 1, yc = y - 1;
      xc < 25 && yc > 0 && grid[yc][xc] === grid[y][x];
      xc++, yc--
    ) {
        console.log("DOWN RIGHT", yc, xc, grid[yc][xc], y, x, grid[y][x])
      nbBox++;
    }
    return nbBox;
  }
  
  function nbDownRight(grid, y, x) {
    let nbBox = 0;
    for (
      let yc = y + 1, xc = x + 1;
      yc < 25 && xc < 25 && grid[yc][xc] === grid[y][x];
      yc++, xc++
    ) {
      nbBox++;
    }
    return nbBox;
  }
  
  function nbUp(grid, y, x) {
    let nbBox = 0;
    for (let yc = y - 1; yc >= 0 && grid[yc][x] === grid[y][x]; yc--) {
      nbBox++;
    }
    return nbBox;
  }

  function nbDown(grid, y, x) {
    let nbBox = 0;
    for (let yc = y + 1; yc < 25 && grid[yc][x] === grid[y][x]; yc++) {
      nbBox++;
    }
    return nbBox;
  }

  export const checkWin=(grid, line, col)=> // : [[string]])
    (
      nbLeft(grid, line, col) + nbRight(grid, line, col) >= 4 ||
      nbUpLeft(grid, line, col) + nbDownRight(grid, line, col) >= 4 ||
      nbDownLeft(grid, line, col) + nbUpRight(grid, line, col) >= 4 ||
      nbUp(grid, line, col) + nbDown(grid, line, col) >= 4
    )
