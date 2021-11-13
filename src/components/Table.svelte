<script>
  export let changePlayerTurn;
  export let playerColor;
  let lines = new Array(15).fill(0).map(() => new Array(15).fill("lightgray"));
  const handleClick = (i, j) => {
    changePlayerTurn();
    lines[i][j] = playerColor;
  };
</script>

<table>
  {#each lines as boxes, i}
    <tr>
      {#each boxes as box, j}
        <td
          on:click={() => handleClick(i, j)}
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
