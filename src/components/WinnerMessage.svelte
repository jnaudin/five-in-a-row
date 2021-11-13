<script lang="ts">
  export let playerColor: string;
</script>

<h2 class="winner">
  <span class="playerName" style={`color: ${playerColor}`}
    >{playerColor} player</span
  > WON 😱
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
