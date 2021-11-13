<script lang="ts">
  import Instructions from "./components/Instructions.svelte";
  import Table from "./components/Table.svelte";
  export let name: string;
  export let playerColor: "red" | "blue" = "red";
  function changePlayerTurn() {
    playerColor = playerColor === "red" ? "blue" : "red";
  }
</script>

<main>
  <h1>{name}</h1>
  <Instructions {playerColor} />
  <Table {changePlayerTurn} {playerColor} />
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

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
