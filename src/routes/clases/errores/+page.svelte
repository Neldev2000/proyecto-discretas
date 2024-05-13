<script>
	import Card from '$lib/clases/errores/Card.svelte';
	import * as Carousel from '$lib/components/ui/carousel';
	import * as Dialog from '$lib/components/ui/dialog';

	import CheckSumDialog from '$lib/clases/errores/CheckSumDialog.svelte';
	import ParityDialog from '$lib/clases/errores/ParityDialog.svelte';
	import CRCDialog from '$lib/clases/errores/CRCDialog.svelte';

	const deteccion = [
		{
			titulo: 'Codigo de Paridad',
			imagen: '/errores/paridad.jpeg',
			content: 'parity'
		},
		{
			titulo: 'Revision de Suma',
			imagen: '/errores/suma.jpeg',
			content: 'checksum'
		},
		{
			titulo: 'Verificacion por Redundancia Ciclica (CRC)',
			imagen: '/errores/crc.jpeg',
			content: 'crc'
		}
	];
</script>

<div class="mr-10 text-lg">
	<div
		class="flex p-10 gap-x-20 my-10 rounded-lg bg-gradient-to-bl from-errores-end-gradient to-errores-start-gradient"
	>
		<img src="/errores/main.jpeg" class="rounded-lg w-80 h-80" alt="" />
		<div class="mt-10 mr-10 text-white">
			<h1 class="font-bold text-5xl">Deteccion y Correccion de Errores</h1>
			<h1 class="text-3xl mt-10">Encontrando la manera de correguir nuestros errores</h1>
		</div>
	</div>

	Como vimos en la seccion de los Medios de Transmision, el enviar datos de un punto a otro puede
	generar que estos sufran de ciertos errores. Estos errores pueden ser causados por diferentes
	factores, como interferencias, una distancia excesiva entre el emisor y el receptor, o incluso por
	un mal funcionamiento de los dispositivos intermedios.
	<br /><br />
	Justo ahi es donde brilla la Teoria de la Codificacion, que introduce tecnicas para poder ver si un
	mensaje ha sido alterado, y en caso de que si entonces poder corregirlo.

	<br /><br />
	Antes de entender los metodos de deteccion y correccion de errores, es importante conocer cuales son
	los posibles errores que pueden ocurrir en la transmision de datos. Retomando la clase pasada, sabemos
	que los mensajes se transforman en un codigo binario, siendo asi los errores de transmision se pueden
	presentar de dos formas.

	<div class="w-full my-10 flex justify-center items-center">
		<Carousel.Root class=" w-72 p-4 text-center shadow-lg shadow-errores-hover">
			<Carousel.Content>
				<Carousel.Item>
					<h1 class="font-bold">Error de Cambio de bit</h1>
					<p class="text-slate-600">Ocurre cuando un solo bit de todo el mensaje se altera.</p>
				</Carousel.Item>
				<Carousel.Item>
					<h1 class="font-bold">Error de Secuencia de bit</h1>
					<p class="text-slate-600">ocurre cuando varios bits del mensaje se alteran</p>
				</Carousel.Item>
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
	</div>

	<h2 class="my-10 font-bold text-xl">Deteccion de Errores</h2>
	<p>
		El proceso de deteccion de errores a nivel binario consiste en ver si alguno de los bits cambio
		de valor en la transmision. Esto lo podemos hacer con 3 metodos como lo siguientes
	</p>
	<div class="w-full grid grid-cols-3 justify-center items-center mx-20">
		{#each deteccion as item}
			<Dialog.Root>
				<Dialog.Trigger>
					<Card titulo={item.titulo} />
				</Dialog.Trigger>
				<Dialog.Content class="sm:max-w-[700px] sm:max-h-[700px] overflow-y-auto">
					{#if item.content === 'parity'}
						<ParityDialog />
					{:else if item.content === 'checksum'}
						<CheckSumDialog />
					{:else if item.content === 'crc'}
						<CRCDialog />
					{/if}
				</Dialog.Content>
			</Dialog.Root>
		{/each}
	</div>
	<ul class="mt-10 flex flex-col gap-y-5">
		<li>
			Codigo de Paridad:  Ejemplo: Si el mensaje es 1000, el bit de paridad seria 1,
			ya que solo hay un 1 en el mensaje. Despues al recibir el mensaje se verifica si la paridad se
			sigue cumpliendo, si no entonces se sabe que hubo un error.
		</li>
		<li>
			Revision de Suma: Antes de enviar cualquier mensaje calculas la suma de los bits (contar el
			numero de 1s) y lo agregas al mensaje, de manera que al recibir el mensaje se vuelve a
			calcular la suma y se compara con la suma inicial
		</li>
		<li>
			Verificacion por Redundancia Ciclica (CRC): Consiste en tomar nuestro mensaje original y hacer
			una division binaria entre un polinomio escogido a detalle. El residuo de esta division lo
			agregamos a nuestro mensaje y al recibirlo simplemente volvemos a hacer la division y
			chequeamos si estos residuos son iguales
		</li>
	</ul>

	<h2 class="my-10 font-bold text-xl">Correccion de Errores</h2>
	Una vez que ya sabemos detectar errores, nos hace falta buscar mecanismos para corregirlos. Existen
	multiples metodos para lograrlo, dentro de los mas comunes se encuentran:

	<ul class="mt-10 flex flex-col gap-y-5">
		<li>
			Repeticion de Bits: Consiste en repetir el mensaje un numero impar de veces, de tal forma que
			si un bit se altera se puede saber cual es el valor correcto. Ejemplo: Si el se envia el bit 1
			3 veces de manera que se recibe 1 0 1 podemos decir que en la mayoria de los casos el bit
			correcto es 1
		</li>
		<li>
			Codigo de Hamming: Sirve tanto para detectar errores como corregirlos, en este caso se toman
			unos bits de paridad para chequear si el mensaje ha sido alterado y en base a operaciones
			matriciales correguir el mensaje
		</li>
	</ul>
</div>
