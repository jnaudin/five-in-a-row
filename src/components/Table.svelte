<script lang="ts">
  import { checkWin } from "../helpers/checkWin";
  export let changePlayerTurn;
  export let playerColor;
  export let setGameFinished;
  export let isGameFinished;

  let lines: string[][] = new Array(25)
    .fill(0)
    .map(() => new Array(25).fill("lightgray"));

  const resetLines = () => {
    lines = lines.map(() => new Array(25).fill("lightgray"));
  };

  const handleClick: (line: number, col: number) => void = (line, col) => {
    lines[line][col] = playerColor;
    if (checkWin(lines, line, col)) setGameFinished();
    else changePlayerTurn();
  };

  $: if (!isGameFinished) resetLines();
</script>

<table>
  {#each lines as boxes, i}
    <tr>
      {#each boxes as box, j}
        <td
          on:click={() => !isGameFinished && handleClick(i, j)}
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
