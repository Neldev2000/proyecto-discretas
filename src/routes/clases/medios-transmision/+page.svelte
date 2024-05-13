<script lang="ts">
	import * as Carousel from "$lib/components/ui/carousel";
	let mensaje = '';
	let mensajeBinario: { letra: string; binario: string }[] = [];
	let primeraMitad: { letra: string; binario: string }[] = [];
	let segundaMitad: { letra: string; binario: string }[] = [];
	import { canales } from "$lib/clases/mediosTransmision";
	import Canales from "$lib/clases/mediosTransmision/Canales.svelte";
	console.log(canales);

	$: {
		mensajeBinario = mensaje.split('').map((char) => ({
			letra: char,
			binario: char.charCodeAt(0).toString(2).padStart(8, '0')
		}));
		primeraMitad = mensajeBinario.slice(0, 3);
		segundaMitad = mensajeBinario.slice(3);
	}
</script>

<div class=" w-fit text-lg mr-10 mb-10">
	<div class="flex p-10 gap-x-20 mt-10  rounded-lg bg-gradient-to-bl from-mediosTransmision-end-gradient to-mediosTransmision-start-gradient"
  >
    <img src="/medios-transmision/main.jpeg"
    class="rounded-lg w-80 h-80" alt="">
    <div class="mt-10 mr-10 text-white">
      <h1 class="font-bold text-5xl" >Medios de Transmisión</h1>
      <h1 class="text-3xl mt-10">
        Conociendo las diferentes formas de transmitir información	
      </h1>
    </div>
  </div>

  <p class="mt-10">Una vez que ya sabemos como nuestros datos son protegidos mediante la encriptacion antes de ser enviados y al momento
	de ser recibidos, es importante conocer como estos datos son codificados desde caracteres hasta bits para ser 
	transmitidos.
  </p>
  <br>
  <p>
	Puesto que no hay una conversion directa entre un caracter y una secuencia de bits, a nivel internacional se han 
	estandarizado varios esquemas como el <strong>ASCII</strong> o el <strong>UTF-8</strong>. Que logran facilitar este proceso
	mediante un mapeo entre cada caracter de cualquier teclado y un numero decimal, ya con este numero simplemente se hace
	una conversion de base 10 a base 2 para obtener la secuencia de bits.
  </p> <br>
  En este video se explica de manera sencilla como una computadora es capaz de interpretar cada uno de los caracteres

	<div class="video-container w-full flex justify-center mt-10">
		<iframe
			width="560"
			height="315"
			class="rounded-lg w-1/2"
			src="https://www.youtube.com/embed/M_yNoV3c8DY"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			title="Metodo de Cesar"
		></iframe>
	</div>

	<h4 class="text-xl font-bold mt-10">Laboratorio</h4>
	<p>
		En este laboratorio vas a poder escribir tu mensaje y se representara directamente en lenguaje binario. </p>
	<div class="flex justify-center w-full items-center gap-x-8 my-10">
		<div class="w-1/2 flex flex-col justify-center items-center">
			<p class="mb-5">Por favor, ingresa un mensaje de no más de 6 letras</p>
			<input type="text" bind:value={mensaje} maxlength="6" class="shadow-md border-2 py-1 px-4 rounded-lg" />
		</div>

		<div class="h-[90px]">
			<h2>Aqui vas a observar tu mensaje original y su conversion a binario</h2>
			<div class="flex gap-x-4 w-full justify-center">
				<div>
					{#each primeraMitad as { letra, binario }, i (i)}
						<p>
							{letra}: {binario}
						</p>
					{/each}
				</div>
				<div>
					{#each segundaMitad as { letra, binario }, i (i)}
						<p>
							{letra}: {binario}
						</p>
					{/each}
				</div>
			</div>
		</div>
	</div>

	

	<h3 class="text-4xl font-bold my-10 ">Los peligros ocultos de la transmisión de datos</h3>
	<p>
		Aunque no lo parezca a simple vista, la transmisión de datos es un proceso complicado. En un mundo ideal
		tus datos viajarían de un lugar a otro sin problemas, pero en la realidad hay muchos obstáculos en el camino.
		Lo que hace que cierta información se pierda o se corrompa en el camino. Todo esto va a depender de multiples factores,
		pero, uno que en la mayoria de los casos tiende a relucir es el de la <strong>Interferencia por el Medio</strong>.
		Para esto, vamos a ver los distintos tipos de canales de transmisión y como estos pueden afectar la integridad de los datos.
	</p>
	
	
	<p></p>
	<h4 class="text-2xl font-bold mt-5">Los distintos tipos de canales de transmisión</h4>
	<div class="w-full flex justify-center items-center rounded-lg mt-10">
        <Carousel.Root class=" w-72 h-80 text-center shadow-lg ">
            <Carousel.Content>
				{#each canales as { canal, descripcion, imagen }, i}
					<Carousel.Item>
						<Canales canal={canal} descripcion={descripcion} imagen={imagen} />
					</Carousel.Item>
				{/each}
                
              
            </Carousel.Content>
            <Carousel.Previous />
            <Carousel.Next />
          </Carousel.Root>
    </div>
    
    

    <h4 class="text-2xl font-bold my-5">Cómo mantener tus datos a salvo</h4>
    <p class="">
        En la siguiente seccion se ahondara mejor en los detalles para resguardar la integridad de nuestros datos al enviarlos
		por cualquier medio de transmisión. Se estara conversando a profundidad de metodos de Deteccion por Paridad, el CRC.
		Y Metodos de Correccion de Errores como el de Hamming. y la Compresion de Datos. entre otros.
    </p>
</div>
