<script>
	import Tipos from '$lib/clases/almacenamiento/Tipos.svelte';
	import * as Carousel from '$lib/components/ui/carousel';
	const data = [
		{
			title: 'Almacenamiento en Disco Duro',
			description:
				'Es el metodo mas comun de almacenamiento y mas lento por sus tiempos de lectura y escritura en discos mageniticos',
			imagen: '/almacenamiento-datos/hdd.jpeg'
		},
		{
			title: 'Almacenamiento en Memoria Flash',
			description:
				'Es un metodo mas moderno de almacenamiento, con una alta velocidad de lectura y escritura en memorias.',
			imagen: '/almacenamiento-datos/flash.jpeg'
		},
		{
			title: 'Almacenamiento en la Nube',
			description:
				'Es el metodo mas flexible, pues guardamos los datos en otras computadoras en el internet.',
			imagen: '/almacenamiento-datos/cloud.jpeg'
		}
	];
	const consideraciones = [
		{
			title: 'Redundancia',
			description: 'Almacenar varias veces la informacion para tener un respaldo de esta.'
		},
		{
			title: 'Codigos de Correccion de Errores',
			description:
				'Como observamos anteriormente, antes de manipular cualquier dato es importante cerciorarse de que estos no esten corruptos.'
		},
		{
			title: 'Validacion de Datos',
			description:
				'Antes de procesar cualquier dato, es importante validar que estos sean correctos. En base a formatos, valores, entre otros'
		}
	];
</script>

<div class="text-lg mb-20 mr-10">
	<div
		class="flex p-10 gap-x-20 my-10 rounded-lg bg-gradient-to-bl from-almacenamientoDatos-end-gradient to-almacenamientoDatos-start-gradient"
	>
		<img src="/almacenamiento-datos/main.jpeg" class="rounded-lg w-80 h-80" alt="" />
		<div class="mt-10 mr-10 text-white">
			<h1 class="font-bold text-5xl">Almacenamiento de Datos</h1>
			<h1 class="text-3xl mt-10">Guardando nuestra información de manera segura</h1>
		</div>
	</div>

	<p>
		En la clase anterior vimos como los datos pueden ser transmitidos de un punto a otro, pero una
		vez que llegan a su destino es importante tener un lugar donde almacenarlos. En esta clase vamos
		a ver los diferentes metodos de almacenamiento de datos y como estos pueden ser utilizados para
		guardar informacion de manera segura y eficiente.
	</p>

	<div class="w-full flex justify-center items-center gap-x-20">
		<div class="w-1/2">
			<h2 class="w-full my-10 text-xl font-bold">Tipos de almacenamiento</h2>
			Para poder guardar los datos de manera segura y eficiente, existen multiples herramientas que su
			uso va a depender de las necesidades especificas. Estos son los metodos mas comunes de almacenamiento

			<div class="w-full flex justify-center items-center rounded-lg mt-10">
				<Carousel.Root class=" w-72 h-80 text-center shadow-lg shadow-almacenamientoDatos-hover">
					<Carousel.Content>
						{#each data as item}
							<Carousel.Item>
								<Tipos title={item.title} description={item.description} imagen={item.imagen} />
							</Carousel.Item>
						{/each}
					</Carousel.Content>
					<Carousel.Previous />
					<Carousel.Next />
				</Carousel.Root>
			</div>
		</div>
		<div class="w-1/2 h-[580px]">
			<h2 class="w-full mt-10 mb-5 text-xl font-bold">Mejores Practicas para almacenar datos</h2>
			Estos metodos utilizan las siguientes caracteristicas para garantizar la seguridad
			y eficiencia de los datos
			<div class="w-full flex justify-center items-center rounded-lg mt-32">
				<Carousel.Root
					class=" w-72 h-fit py-5 text-center shadow-lg shadow-almacenamientoDatos-hover"
				>
					<Carousel.Content>
						{#each consideraciones as item}
							<Carousel.Item>
								<Tipos title={item.title} description={item.description} />
							</Carousel.Item>
						{/each}
					</Carousel.Content>
					<Carousel.Previous />
					<Carousel.Next />
				</Carousel.Root>
			</div>
		</div>
	</div>
</div>
