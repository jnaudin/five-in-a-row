<script lang="ts">
  import { nbLines, nbCols } from "../stores.js";

  let nbLinesValue: number;
  let nbColsValue: number;

  nbLines.subscribe((value) => {
    nbLinesValue = value;
  });

  nbCols.subscribe((value) => {
    nbColsValue = value;
  });

  const updateNbLines = (event) => nbLines.set(event.target.value);
  const updateNbCols = (event) => nbCols.set(event.target.value);
</script>

<h2>
  <input type="number" bind:value={nbLinesValue} on:input={updateNbLines} />
  <input type="number" bind:value={nbColsValue} on:input={updateNbCols} />
</h2>
