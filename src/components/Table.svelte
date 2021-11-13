<script>
  export let handleClick;
  let lines = new Array(15).fill(0).map(() => new Array(15).fill("lightgray"));
</script>

<table>
  {#each lines as boxes, i}
    <tr>
      {#each boxes as box, i}
        <td on:click={handleClick} style={`background-color: ${box};`} />
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
