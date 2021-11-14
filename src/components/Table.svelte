<script lang="ts">
  import { nbLines, nbCols } from "../stores.js";
  import { checkWin } from "../helpers/checkWin";
  export let changePlayerTurn;
  export let playerColor;
  export let setGameFinished;
  export let isGameFinished;

  let nbLinesValue: number;
  let nbColsValue: number;

  nbLines.subscribe((value) => {
    nbLinesValue = value;
  });

  nbCols.subscribe((value) => {
    nbColsValue = value;
  });

  let lines: string[][];
  const initLines = (nbLines: number, nbCols: number) => {
    lines = new Array(nbLines)
      .fill(0)
      .map(() => new Array(nbCols).fill("lightgray"));
  };

  initLines(nbLinesValue, nbColsValue);

  const handleClick: (line: number, col: number) => void = (line, col) => {
    if (!isGameFinished) {
      lines[line][col] = playerColor;
      if (checkWin(lines, line, col, nbLinesValue, nbColsValue))
        setGameFinished();
      else changePlayerTurn();
    }
  };

  $: if (!isGameFinished) initLines(nbLinesValue, nbColsValue);
</script>

<table>
  {#each lines as boxes, i}
    <tr>
      {#each boxes as box, j}
        <td
          on:click={() => box === "lightgray" && handleClick(i, j)}
          style={`background-color: ${box};`}
        />
      {/each}
    </tr>
  {/each}
</table>

<style>
  td {
    width: 2rem;
    height: 2rem;
  }
</style>
