<script lang="ts">
	import * as RadioGroup from '$lib/components/ui/radio-group/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
    import * as Accordion from "$lib/components/ui/accordion/index.js";

	let preguntaCesar = '';
	let respuestaCesar = 'DENTRODELLAGOKATATUHAYUNALLAVEPARAACCEDERAELTEMPLO';

	let preguntaVigenere = '';
	let respuestaVigenere = 'MEGUSTAENCRIPTAR';

	let esCesarRespondido = false;
	let esVigenereRespondido = false;

	let respuestRSA = '3';
	let preguntaRSA = '';
	let esRSARespondido = false;

	const opcionesRSA = [
		'Fue inventado por Julio Cesar',
		'Todo mundo puede ver el mensaje original',
		'Es muy dificil de descifrar',
		'Solo cuenta con una llave para cifrar y descifrar'
	];

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
		esCesarRespondido = preguntaCesar == respuestaCesar;
		esVigenereRespondido = preguntaVigenere == respuestaVigenere;
		esRSARespondido = preguntaRSA == respuestRSA;
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

<Accordion.Root class="w-full sm:max-w-[70%] mb-10">
    <Accordion.Item value="item-1">
      <Accordion.Trigger><h1 class="font-bold text-2xl">Preguntas</h1></Accordion.Trigger>
      <Accordion.Content
        >
        <div>
            <div class="my-10">
                <h2 class=" text-lg my-10">
                    Supongamos que estas buscando un tesoro perdido y acabas de encontrar una pista que esta
                    encriptada con el Metodo Cesar, el mensaje es <strong
                        >MNWCAXMNUUJPXTJCJCDQJHDWJUUJENYJAJJLLNMNAJNUCNVYUX</strong
                    >
                </h2>
        
                <input
                    placeholder="Escribe tu mensaje secreto"
                    type="text"
                    bind:value={preguntaCesar}
                    class="bg-white font-bold py-2 px-4 rounded-lg shadow-md border-2"
                />
        
                <h2 class="text-lg my-10">
                    Ahora, tienes otra pista encriptada con el Algoritmo de Vigenere. La llave es <strong
                        >DISCRETAS</strong
                    >
                    y el mensaje es <strong>PMYWJXTEFFZARKEK</strong>. ¿Puedes descifrarlo?
                </h2>
        
                <input
                    placeholder="Escribe tu mensaje secreto"
                    type="text"
                    bind:value={preguntaVigenere}
                    class="bg-white font-bold py-2 px-4 rounded-lg shadow-md border-2"
                />
        
                <h2 class="text-lg my-10">
                    Cual de las siguientes afirmaciones es cierta para el algoritmo RSA
                </h2>
        
                <RadioGroup.Root bind:value={preguntaRSA} class="flex flex-col gap-y-5 w-1/2 ">
                    {#each opcionesRSA as opcion, i}
                        <div class="flex items-center space-x-2">
                            <RadioGroup.Item value={`${i + 1}`} id="option-one" />
                            <Label for="option-one">{opcion}</Label>
                        </div>
                    {/each}
                </RadioGroup.Root>
            </div>
            <button class="p-3 font-bold rounded-lg bg-gradient-to-bl from-encriptacion-end-gradient to-encriptacion-start-gradient" on:click={checkAswers}> Verifica tus respuestas </button>
        </div>
        
        </Accordion.Content
      >
    </Accordion.Item>
</Accordion.Root>

