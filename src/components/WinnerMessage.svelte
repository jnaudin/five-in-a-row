<script lang="ts">
  export let playerColor: string;
  export let resetGame: () => void;
</script>

<h2 class="winner">
  <span class="playerName" style={`color: ${playerColor}`}
    >{playerColor} player</span
  >
  WON 🎉🎉🎉
  <button on:click={resetGame}>Replay</button>
</h2>

<style>
  .playerName {
    font-weight: 500;
  }

  .winner {
    display: block;
  }

  .winner:first-letter {
    text-transform: capitalize;
  }
</style>
