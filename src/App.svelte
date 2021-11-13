<script lang="ts">
  export let name: string;
  let playerColor: "red" | "blue" = "red";
  function handleClick() {
    playerColor = playerColor === "red" ? "blue" : "red";
  }
</script>

<main>
  <h1>Hello {name}!</h1>
  <p class="instructions">
    <span class="playerName {playerColor}">{playerColor} player</span>, choose
    your box.
  </p>
  <div on:click={handleClick}>todo boxes</div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

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

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
