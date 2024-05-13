<script lang="ts">
	import { vigenereCipher, generateVigenereKey } from '$lib/clases/encriptacion/utils'; // Asegúrate de que la ruta y los nombres de las funciones sean correctos
	import Icon from '@iconify/svelte';

	export let llave, mensaje;
	let vigenereKey: string;
	let cifrado: string;
	$: {
		vigenereKey = generateVigenereKey(mensaje.toUpperCase(), llave.toUpperCase());
		cifrado = vigenereCipher(mensaje.toUpperCase(), vigenereKey);
	}
</script>

<div class="flex flex-col gap-y-1 justify-center items-center">
	<div class="">
		<p>
			Aqui veras el proceso para generar el mensaje cifrado, el texto en <strong class="text-encriptacion-hover"
				>Morado</strong
			>
			es tu mensaje original, el texto en <strong class="text-mediosTransmision-hover">Verde</strong> es tu llave secreta
			y el texto en
			<strong class="text-errores-hover">Naranja</strong> es tu mensaje cifrado.
		</p>
	</div>
	{#if llave.length > 0}
		<div class="flex justify-center items-center">
			{#each Array.from(mensaje.toUpperCase()) as letra}
				<div
					class=" p-4 border-2 bg-encriptacion-hover font-bold rounded-lg border-black mx-1 w-6 h-6 flex justify-center items-center"
				>
					{letra}
				</div>
			{/each}
		</div>
		<div class="flex justify-center items-center">
			{#each Array.from(mensaje) as _}
				<Icon icon="mingcute:arrows-down-fill" class=" mx-1 w-8 h-6 " />
			{/each}
		</div>
		<div class="flex justify-center items-center">
			{#each Array.from(vigenereKey) as letra}
				<div
					class="p-4 border-2 rounded-lg bg-mediosTransmision-hover  font-bold border-black mx-1 w-6 h-6 flex justify-center items-center"
				>
					{letra}
				</div>
			{/each}
		</div>
		<div class="flex justify-center items-center">
			{#each Array.from(mensaje) as _}
				<Icon icon="mingcute:arrows-down-fill" class=" mx-1 w-8 h-6 " />
			{/each}
		</div>
		<div class="flex justify-center items-center">
			{#each Array.from(cifrado) as letra}
				<div
					class="p-4 border-2 rounded-lg bg-errores-hover  font-bold border-black mx-1 w-6 h-6 flex justify-center items-center"
				>
					{letra}
				</div>
			{/each}
		</div>
	{/if}
</div>
