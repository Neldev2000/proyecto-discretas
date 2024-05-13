<script>

	import VigenereMensajes from './VigenereMensajes.svelte';

	import * as Dialog from "$lib/components/ui/dialog";
    import * as Table from "$lib/components/ui/table";

	let mensaje = '';
	let llave = '';
</script>

<Dialog.Title class="text-3xl">
    Cifrado de Vigenere
</Dialog.Title>

<div class="text-lg">
	<h2 class="text-xl font-bold mb-4">Breve Historia</h2>
	<p>

		Conforme la historia de la criptografia avanzaba, las personas se dieron cuenta de que el metodo Cesar
		era muy facil de romper, es por eso que Blaise de Vigenere creo un revolucionario cifrado que lleva su nombre. 

		
	</p>

	<h2 class="text-xl font-bold mb-4 mt-6">¿Cómo funciona?</h2>
	<p>
		Vigenere al desarrollar su metodo introduce el concepto de una llave secreta, que es una palabra clave con la 
		cual determinamos la palabra cifrada. La idea es sencilla, si en el metodo de Cesar desplazabamos cada letra un
		numero fijo de posiciones, en el metodo de Vigenere desplazamos cada letra segun la posicion de la letra en la llave.
		Ademas, si la llave es mas corta que el mensaje, la repetimos hasta que tenga la misma longitud.
	</p>

	<h2 class="text-xl font-bold mb-4 mt-6">¡Vamos a cifrar!</h2>
	<p>
		Ahora supongamos que queremos cifrar el mensaje <strong>COMOESTAS</strong> utilizando la llave <strong>BIEN</strong>.
		Asi quedaria nuestro mensaje cifrado:
	</p>
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head>Letra Original</Table.Head>
				<Table.Head>Letra de la Llave</Table.Head>
				<Table.Head>Desplazamientos a la derecha</Table.Head>
				<Table.Head>Letra Cifrada</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			<Table.Row>
				<Table.Cell class="font-medium">C</Table.Cell>
				<Table.Cell>B</Table.Cell>
				<Table.Cell>1</Table.Cell>
				<Table.Cell>D</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="font-medium">O</Table.Cell>
				<Table.Cell>I</Table.Cell>
				<Table.Cell>8</Table.Cell>
				<Table.Cell>W</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="font-medium">M</Table.Cell>
				<Table.Cell>E</Table.Cell>
				<Table.Cell>4</Table.Cell>
				<Table.Cell>Q</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="font-medium">O</Table.Cell>
				<Table.Cell>N</Table.Cell>
				<Table.Cell>14</Table.Cell>
				<Table.Cell>B</Table.Cell>
			</Table.Row>
			
			<Table.Row>
				<Table.Cell class="font-medium">E</Table.Cell>
				<Table.Cell>B</Table.Cell>
				<Table.Cell>1</Table.Cell>
				<Table.Cell>F</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="font-medium">S</Table.Cell>
				<Table.Cell>I</Table.Cell>
				<Table.Cell>8</Table.Cell>
				<Table.Cell>A</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="font-medium">T</Table.Cell>
				<Table.Cell>E</Table.Cell>
				<Table.Cell>4</Table.Cell>
				<Table.Cell>X</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="font-medium">A</Table.Cell>
				<Table.Cell>N</Table.Cell>
				<Table.Cell>14</Table.Cell>
				<Table.Cell>N</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="font-medium">S</Table.Cell>
				<Table.Cell>B</Table.Cell>
				<Table.Cell>1</Table.Cell>
				<Table.Cell>T</Table.Cell>
			</Table.Row>
			
			
		</Table.Body>
	
	</Table.Root>

	<p class="mt-5">Por lo que nuestro mensaje cifrado queda como <strong>DWQBFAXNT</strong></p>
	<br><br>
	Ahora el proceso de descifrado es muy similar, simplemente debemos hacer un desplazamiento a la izquierda
	conocienddo nuestra llave secreta el mismo punto de veces que lo hicimos para cifrarlo.
	<br>
	A continuacion se muestra un video detallado del metodo de Vigenere
	
	
	<div class="video-container w-full flex justify-center mt-10">
		<iframe
			width="560"
			height="315"
			class="rounded-lg w-2/3 shadow-lg"
			src="https://www.youtube.com/embed/aHSt_lzRIxw"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			title="Metodo de Vigenere"
		></iframe>
	</div>

	<h1 class="font-bold text-xl my-10">Laboratorio</h1>
	<p>Ahora vamos a poner en practica los conocimientos sobre el metodo de Vigenere</p>
	<div class="flex justify-between items-center w-full mt-10 mb-4 gap-x-10">
		<div class="w-1/2 flex flex-col font-bold gap-y-5 h-[400px] flex-shrink-0">
			Aqui puedes ingresar tu llave secreta y el mensaje que quieres cifrar

			<label class="text-sm" for="llave-secreta">Llave Secreta</label>
			<input type="text" class="p-2 rounded-lg shadow-md border-2 bg-white" bind:value={llave} />

			<label class="text-sm" for="llave-secreta">Mensaje a cifrar</label>
			<input
				type="text"
				class="p-2 rounded-lg shadow-md border-2 bg-white"
				bind:value={mensaje}
			/>
		</div>
		<div class="w-1/2 h-[400px]	 overflow-auto">
			
            <VigenereMensajes 
                llave={llave} 
                mensaje={mensaje}
            />
        </div>
	</div>
</div>
