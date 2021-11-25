<script lang="ts">
  import { params } from "../stores.js";

  let nbLinesValue: number;
  let nbColsValue: number;

  params.subscribe(({ nbLines, nbCols }) => {
    nbLinesValue = nbLines;
    nbColsValue = nbCols;
  });

  const updateNbLines = (event) =>
    params.set({ nbCols: nbColsValue, nbLines: +event.target.value });
  const updateNbCols = (event) =>
    params.set({ nbLines: nbLinesValue, nbCols: +event.target.value });
</script>

<h2>
  <input type="number" bind:value={nbLinesValue} on:input={updateNbLines} />
  <input type="number" bind:value={nbColsValue} on:input={updateNbCols} />
</h2>
