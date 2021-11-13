<script>
  export let playerColor;
</script>

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
