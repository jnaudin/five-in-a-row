<script>
  export let playerColor;
</script>

<p class="instructions">
  <span class="playerName {playerColor}">{playerColor} player</span>, choose
  your box :
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

  .red {
    color: red;
  }

  .blue {
    color: blue;
  }
</style>
