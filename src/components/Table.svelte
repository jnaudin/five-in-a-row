<script>
  import { checkWin } from "../helpers/checkWin";
  console.log("adsadsa",checkWin)
  export let changePlayerTurn;
  export let playerColor;
  export let setGameFinished;
  export let isGameFinished;
  let lines = new Array(25).fill(0).map(() => new Array(25).fill("lightgray"));
  const handleClick = (i, j) => {
    lines[i][j] = playerColor;
    if (checkWin(lines, i,j)) setGameFinished();
    else changePlayerTurn();
  };
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
