<script lang="ts">
	import CardClases from '$lib/main-page/componentes/CardClases.svelte';
	import { clases } from '$lib/main-page/utils/clases';
</script>


<html lang="en">
	<div class="ml-40 mt-40">
		<h1 class="font-bold text-5xl text-second">Code Nook</h1>
		<h1 class="text-3xl mt-10 text-second">
			Tu lugar favorito para aprender de Teoria de <br /> Codificacion
		</h1>
		<h1 class="font-bold text-4xl mt-20 text-second">Temas</h1>

		<div class="mt-20 flex justify-center items-center gap-x-40">
			{#each clases as clase}
				<CardClases enlace={clase.enlace} titulo={clase.titulo} />
			{/each}
		</div>
	</div>
</html>
<style lang="postcss">
	:global(html) {
		background-color: theme(colors.backgroundColor);
	}
</style>
