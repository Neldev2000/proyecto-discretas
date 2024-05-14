<script lang="ts">
	import * as RadioGroup from '$lib/components/ui/radio-group/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
    import * as Accordion from "$lib/components/ui/accordion/index.js";

	let preguntaParidad = '';
	let respuestaParidad = '0';

	let preguntaCRC = '';
	let respuestaCRC = '001101';

	let esCesarRespondido = false;
	let esVigenereRespondido = false;

	let respuestaHamming = '1110';
	let preguntaHamming = '';
	let esRSARespondido = false;

	function checkAswers() {
		const mensaje =
			esCesarRespondido && esVigenereRespondido && esRSARespondido
				? 'Todas las respuestas son correctas'
				: 'Algunas respuestas son incorrectas';
		Toastify({
			text: mensaje,
			duration: 3000
		}).showToast();
	}

	$: {
		esCesarRespondido = preguntaParidad == respuestaParidad;
		esVigenereRespondido = preguntaCRC == respuestaCRC;
		esRSARespondido = preguntaHamming == respuestaHamming;
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		type="text/css"
		href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"
	/>
	<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
</svelte:head>

<Accordion.Root class="w-full sm:max-w-[70%] my-10">
    <Accordion.Item value="item-1">
      <Accordion.Trigger><h1 class="font-bold text-2xl">Preguntas</h1></Accordion.Trigger>
      <Accordion.Content
        >
        <div>
            <div class="my-10">
                <h2 class=" text-lg my-10">
                    Vamos a cambiar la regla de la deteccion por paridad, ahora se verifica si el numero es impar (en vez de par).
                    Siendo asi, cual seria el bit de paridad en este mensaje <strong>1101</strong>
                </h2>
        
                <input
                    placeholder="Escribe el bit"
                    type="text"
                    bind:value={preguntaParidad}
                    class="bg-white font-bold py-2 px-4 rounded-lg shadow-md border-2"
                />
        
                <h2 class="text-lg my-10">
                    En este caso recibiste este mensaje con una deteccion de error CRC : 11001011<strong>11111</strong>.
                    Con que polinomio generador se hizo este mensaje?
                </h2>
        
                <input
                    placeholder="Escribe el polinomio"
                    type="text"
                    bind:value={preguntaCRC}
                    class="bg-white font-bold py-2 px-4 rounded-lg shadow-md border-2"
                />
        
                <h2 class="text-lg my-10">
                    El siguiente mensaje se recibio usando una codificacion de Hamming: <strong>0010111</strong>
                    Y se detecto un error ¿Cual es el mensaje Original en 4 bits?
                </h2>
                <input
                placeholder="Escribe tu codigo"
                type="text"
                bind:value={preguntaHamming}
                class="bg-white font-bold py-2 px-4 rounded-lg shadow-md border-2"
            />
    
            </div>
            <button class="p-3 font-bold text-white rounded-lg bg-gradient-to-bl from-errores-end-gradient to-errores-start-gradient" on:click={checkAswers}> Verifica tus respuestas </button>
        </div>
        
        </Accordion.Content
      >
    </Accordion.Item>
</Accordion.Root>

