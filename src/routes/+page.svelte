<script lang="ts">
	import CardClases from '$lib/main-page/componentes/CardClases.svelte';
	import { clases } from '$lib/main-page/utils/clases';
	
</script>


<html lang="en" class="bg-backgroundColor">

	<div class="mt-40 mx-40 mb-20">
		<h1 class="text-5xl font-bold">Code Nook</h1>
		<p class="mt-10 text-3xl">
			Tu lugar favorito para aprender de <br>
			la Teoria de Codificacion
		</p>

		<h2 class="text-4xl mt-20 mb-10 font-bold">Clases</h2>
		<div class=" grid grid-cols-3 gap-y-10 gap-x-20 w-full">
			{#each clases as clase}
				<CardClases
					fade={clase.fade}
					enlace={clase.enlace}
					titulo={clase.titulo}
					enlaceImagen={clase.enlaceImagen}
					descripcion={clase.descripcion}
					hoverColor= {clase.hoverColor}
				/>
			{/each}
		</div>
	</div>

</html>

