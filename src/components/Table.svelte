<script lang="ts">
  import { params } from "../stores.js";
  import { checkWin } from "../helpers/checkWin";
  export let changePlayerTurn;
  export let playerColor;
  export let setGameFinished;
  export let isGameFinished;

  let nbLinesValue: number;
  let nbColsValue: number;

  params.subscribe(({ nbLines, nbCols }) => {
    nbLinesValue = nbLines;
    nbColsValue = nbCols;
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

  // init array when game restarts
  $: if (!isGameFinished) initLines(nbLinesValue, nbColsValue);
</script>

<table>
  {#each lines as boxes, i}
    <tr>
      {#each boxes as box, j}
        <td
          on:click={() => box === "lightgray" && handleClick(i, j)}
          class={`${box} ${isGameFinished ? "" : `current-${playerColor}`}`}
        />
      {/each}
    </tr>
  {/each}
</table>

<style>
  table {
    margin: auto;
  }

  .lightgray {
    background-color: lightgrey;
  }

  .current-red.lightgray:hover {
    background-color: lightsalmon;
  }
  .current-blue.lightgray:hover {
    background-color: lightskyblue;
  }

  .red {
    background-color: red;
  }
  .blue {
    background-color: blue;
  }

  td {
    width: 2rem;
    height: 2rem;
  }
</style>
