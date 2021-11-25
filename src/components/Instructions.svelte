<script lang="ts">
  export let playerColor: string;
</script>

<p class="instructions">
  The first player to get 5 of her marks in a row (up, down, across, or
  diagonally) is the winner.
</p>
<p class="instructions">
  <span class="playerName" style={`color: ${playerColor}`}
    >{playerColor} player</span
  >, it's your turn to choose a box :
</p>

<style>
  .playerName {
    font-weight: 500;
  }

  .instructions {
    display: block;
  }

  .instructions:first-letter {
    text-transform: capitalize;
  }
</style>
