<script lang="ts">
	let mensaje = '';
	let mensajeBinario: { letra: string; binario: string }[] = [];
	let primeraMitad: { letra: string; binario: string }[] = [];
	let segundaMitad: { letra: string; binario: string }[] = [];

	$: {
		mensajeBinario = mensaje.split('').map((char) => ({
			letra: char,
			binario: char.charCodeAt(0).toString(2).padStart(8, '0')
		}));
		primeraMitad = mensajeBinario.slice(0, 3);
		segundaMitad = mensajeBinario.slice(3);
	}
</script>

<div class="text-second w-fit mx-10 mt-20  text-lg">
	<h1 class="text-5xl mb-20 font-bold">
		Los peligros ocultos de la transmisión de datos: <br /> Lo que hay que saber
	</h1>

	<h3 class="text-4xl font-bold mt-10">
		De texto a binario: cómo funciona la transmisión de datos
	</h3>
	<p class="mt-4">
		Antes de sumergirnos en los peligros de la transmisión de datos, demos un paso atrás y
		entendamos cómo se transmiten los datos en primer lugar. Cuando envías un correo electrónico o
		subes un archivo, tu ordenador toma el texto y las imágenes y los convierte en código binario,
		una serie de 1s y 0s que los ordenadores pueden entender. Este proceso se llama codificación.
		Por ejemplo, la letra «A» se convierte en «01100001» en binario, mientras que la letra «B» se
		convierte en «01100010». Este código binario se transmite a través de Internet, donde puede
		descodificarse en el texto y las imágenes originales.
	</p>
	<br /><br />
	<p>
		Para esto utilizamos una tabla conocida en el mundo de la informática como la tabla ASCII, la
		cual nos permite generar una traduccion directa entre letras y numeros. como se explica en este
		video
	</p>

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
	<div class="flex justify-center w-full items-center gap-x-8">
		<div>
			<p>Por favor, ingresa un mensaje de no más de 6 letras:</p>
			<input type="text" bind:value={mensaje} maxlength="6" />
		</div>

		<div>
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

	<h3 class="text-2xl font-bold mt-10">Los peligros de la transmisión de datos</h3>

	<p class="mt-4">
		¡Hola! ¿Alguna vez te has parado a pensar cómo llegan tus datos del punto A al punto B? Ya sea
		enviando un correo electrónico, subiendo un archivo o transmitiendo tu programa favorito, la
		transmisión de datos es una parte esencial de nuestra vida digital. Pero, ¿sabía que este
		proceso puede ser arriesgado?
	</p>

	<h2 class="text-2xl font-bold mt-10">El problema de los canales de transmisión</h2>

	<p class=" mt-4">
		Piense en los canales de transmisión como si fueran carreteras para sus datos. Al igual que los
		coches pueden perderse o dañarse en la carretera, sus datos pueden perderse o corromperse
		durante la transmisión. Y al igual que las carreteras tienen condiciones diferentes, los canales
		de transmisión tienen retos diferentes.
	</p>

	<h3 class="text-4xl font-bold my-10 ">Los peligros ocultos de la transmisión de datos</h3>
	<p>
		¡Hola! Alguna vez te has parado a pensar cómo llegan tus datos del punto A al punto B? Ya sea
		enviando un correo electrónico, subiendo un archivo o transmitiendo tu programa favorito, la
		transmisión de datos es una parte esencial de nuestras vidas digitales. Pero, ¿sabías que este
		proceso puede ser un negocio arriesgado?
	</p>
	<p></p>
	<h4 class="text-2xl font-bold mt-5">El problema de los canales de transmisión</h4>
	<p>
		Piensa en los canales de transmisión como carreteras para tus datos. Al igual que los coches
		pueden perderse o dañarse en la carretera, sus datos pueden perderse o corromperse durante la
		transmisión. Y al igual que las diferentes carreteras tienen diferentes condiciones, los
		diferentes canales de transmisión tienen diferentes retos.
	</p>
	<p></p>
	<h4 class="text-2xl font-bold mt-5">Los distintos tipos de canales de transmisión</h4>
    <ul class="flex flex-col gap-y-3">
        <li class="mt-5">
            Fibra óptica: Como autopistas superrápidas para tus datos, pero incluso éstas pueden congestionarse o 
            dañarse.
        </li>
        <li>
            Canales de radio: Como transmitir tus datos por radio, pero las interferencias y el ruido pueden
            estropear la señal.
        </li>
        <li>
            Canales por satélite: Como enviar tus datos en un viaje espacial, pero pueden perderse en el espacio 
            o sufrir retrasos.
        </li>
        <li>
            Canales por cable: Como las carreteras tradicionales para tus datos, pero también pueden atascarse 
            o dañarse.
        </li>
    </ul>
    <h4 class="text-2xl font-bold my-5">Que ocurre si algo sale mal</h4>
    <p>
        Cuando envias informacion, puede ser que parte de esta se pierda o se dañe. Un ejemplo de esto es el famoso
        juego de <strong>el secretico</strong> en el cual se transmite un mensaje de persona a persona y al final se
        compara el mensaje original con el mensaje final para ver si se mantuvo la integridad del mensaje. Normalmente
        estos 2 difieren en alguna medida
    </p><br><br>
    <p>
        En el caso de los canales de transmisión vistos estos errores no son tan notorios como en el ejemplo dado. A 
        nivel informatico, los errores se pueden presentar en dos formas
    </p>
    <ul>
        <ol>
            Error de bits: Es como si en nuestro juego, el mensaje dijera: <strong>La manzana es <strong class="text-red">roja</strong> </strong>
            pero, al final, el mensaje dice: <strong>La manzana es <strong class="text-green">verde</strong> </strong>
        </ol>
        <ol>
            Perdida de paquetes de datos: Es como si en nuestro juego, el mensaje dijera: <strong>La manzana es roja y <strong class="text-red">sabe</strong> bien</strong>
            pero wl mensaje final dice: <strong>La manzana es roja y bien</strong> como vemos una palabra se ha borrado
        </ol>
    </ul>

    <h4 class="text-2xl font-bold my-5">Cómo mantener tus datos a salvo</h4>
    <p>
        Los mecanismos modernos permiten que los datos se transmitan de manera segura y eficiente. Usando tecnicas 
        como <strong>La Comprension de Datos</strong> que se encarga de reducir el tamaño de los datos a transmitir 
        y asi reducir la probabilidad de cometer errores. Otras formas de reducir errores son <strong>La redundancia de 
        datos</strong> que consiste en enviar la misma informacion.
    </p>
</div>
