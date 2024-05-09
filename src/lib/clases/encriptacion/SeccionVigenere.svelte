<script>
	import VIGENERE_EJEMPLO from '$lib/clases/encriptacion/IMAGES/vigenere_ejemplo.png';
	import VIGENERE_DESCIFRADO from '$lib/clases/encriptacion/IMAGES/vigenere_descifrado.png';
	import VigenereMensajes from './VigenereMensajes.svelte';

	let mensaje = '';
	let llave = '';
</script>

<div class="text-lg">
	<p>
		Durante anios las personas utilizaron el metodo de Cesar o variantes de este para encriptar
		cualquier tipo de mensajes, pero a la par de su uso, la gente empezo a encontrar formas de
		descifrarlo. Y es que como vimos, solo hace falta probar 26 formas de codificacion para
		descrifrar el mensaje real.
		<br /> <br />
		Es por esto que Blaise de Vigenere, un criptografo frances, decidio mejorar el metodo de Cesar, creando
		un algoritmo que consiste en tener una <strong>Llave secreta</strong> que nos ayudara a cifrar y
		descifrar el mensaje. Vigenere adopta la idea de Cesar de mover las letras del abecedario, pero
		en lugar de moverlas una cantidad fija para todas las letras, este las mueve segun la posicion
		de la letra en la llave secreta.
		<br /> <br />
	</p>
	<p class="font-bold text-2xl mb-10">Ejemplo</p>
	<div class="w-full flex justify-center mb-10">
		<img src={VIGENERE_EJEMPLO} alt="" class="w-1/2" />
	</div>

	<p>
		Como vemos en la imagen, el mensaje que queremos proteger es <strong>COMO ESTAS</strong> y la
		llave para codificarlo es <strong>BIEN</strong>, como esta no tiene la misma longitud que el
		mensaje, la repetimos hasta que tenga la misma longitud.
		<br /> <br />
		Luego lo que hacemos es mover cada letra de nuestro mensaje original segun la posicion de la letra
		en la llave como si fuese el metodo Cesar y de ahi obtenemos nuestro mensaje cifrado.
	</p>
	<br><br>
	<p>
		Para lograr descifrar ese mensaje complejo teniendo la llave, normalmente se hace uso de una 
		<strong>Tabula Recta</strong> que es una tabla donde salen todas las combinaciones posibles para
		cifrar y descifrar un mensaje.
		<br>
		Nosotros vamos a aplicar un proceso inverso, si antes para cifrar un mensaje necesitabamos mover
		las en <strong>sentido horario</strong>, ahora vamos a moverlas en sentido antihorario para descifrar el mensaje.
		Es decir, Si antes pasabamos de <strong> A a B, de B a C, ...</strong> Ahora lo haremos al reves
	</p>
	<div class="w-full flex justify-center mb-10">
		<img src={VIGENERE_DESCIFRADO} alt="" class="w-1/2" />
	</div>

	<p>
		Como vemos, para poder descifrar el mensaje teniendo la llave simplemente tenemos que mover hacia atras
		las cantidades que nos indica la llave. Asi para la llave <strong>BIEN</strong> movemos 1 posicion, 8 posiciones
		4 posiciones y 13 posiciones respectivamente.
	</p>

	<p class="font-bold text-2xl my-10">Video Explicativo</p>
	<div class="video-container w-full flex justify-center">
		<iframe
			width="560"
			height="315"
			class="rounded-lg w-1/2"
			src="https://www.youtube.com/embed/aHSt_lzRIxw"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			title="Metodo de Vigenere"
		></iframe>
	</div>

	<h1 class="font-bold text-2xl my-10">Laboratorio</h1>
	<p>Ahora vamos a poner en practica los conocimientos sobre el metodo de Vigenere</p>
	<div class="flex justify-between items-center w-full mt-10 mb-4 gap-x-10">
		<div class="w-1/2 flex flex-col font-bold gap-y-5 h-[400px] flex-shrink-0">
			Aqui puedes ingresar tu llave secreta y el mensaje que quieres cifrar

			<label class="text-sm" for="llave-secreta">Llave Secreta</label>
			<input type="text" class="border-2 border-black bg-blue p-2 rounded-lg" bind:value={llave} />

			<label class="text-sm" for="llave-secreta">Mensaje a cifrar</label>
			<input
				type="text"
				class="border-2 border-black bg-blue p-2 rounded-lg"
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
