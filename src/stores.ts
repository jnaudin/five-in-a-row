import { writable } from "svelte/store";

export const params = writable({ nbLines: 25, nbCols: 25 });
