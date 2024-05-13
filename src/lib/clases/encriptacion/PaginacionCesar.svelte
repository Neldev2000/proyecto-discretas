<script lang="ts">
  import { cesarCambios } from "./stores";
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const referencePages = ['Y', 'Z', 'A', 'B', 'C'];
  
  function setPage(page:number) {
    cesarCambios.update((n) => page);
  }
</script>

<!-- Dynamic Pagination -->
<div class="flex space-x-2 mt-4">
  {#each Array.from({length: 5}, (_, i) => alphabet[($cesarCambios - 2 + i + alphabet.length) % alphabet.length]) as letter, i (letter)}
    <button  transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }} class:bg-encriptacion-start-gradient={alphabet[$cesarCambios] === letter}  class:font-bold={alphabet[$cesarCambios] === letter} class="px-3 py-2 border rounded" on:click={() => setPage(($cesarCambios - 2 + i + alphabet.length) % alphabet.length)}>{letter}</button>
  {/each}
</div>

<!-- Reference Pagination -->
<div class="flex space-x-2 mt-4">
  {#each referencePages as letter (letter)}
    <h1 class="px-3 py-2 border rounded">{letter}</h1>
  {/each}
</div>