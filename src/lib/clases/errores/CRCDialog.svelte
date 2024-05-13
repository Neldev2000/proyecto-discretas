<script lang="ts">
    import Icon from '@iconify/svelte';
    import * as Dialog from "$lib/components/ui/dialog";
    import * as Table from '$lib/components/ui/table';
    import * as Carousel from '$lib/components/ui/carousel';

    let mensaje = '';
  let polinomio = '';
  let mensajeFinal = '';
  let residuo = ''
  function calcularCRC(mensaje:String, polinomio:string) {
    let mensajeBits = Array.from(mensaje).map(Number);
    let polinomioBits = Array.from(polinomio).map(Number);

    // Añade ceros al final del mensaje
    for (let i = 0; i < polinomioBits.length - 1; i++) {
        mensajeBits.push(0);
    }

    let pos = 0;

    // Mientras haya suficientes bits restantes en el mensaje
    while (pos <= mensajeBits.length - polinomioBits.length) {
        // Si el bit actual del mensaje es 1
        if (mensajeBits[pos] === 1) {
            // Realiza una operación XOR con el polinomio
            for (let i = 0; i < polinomioBits.length; i++) {
                mensajeBits[pos + i] = mensajeBits[pos + i] ^ polinomioBits[i];
            }
        }
        // Avanza a la siguiente posición
        pos++;
    }

    // El residuo es la parte final del mensaje
    let residuo = mensajeBits.slice(-polinomioBits.length + 1);

    return residuo.join('');
}

  $: if (mensaje && polinomio) {
    residuo = calcularCRC(mensaje, polinomio);
  }else {
    residuo = '';
}
</script>

<div class="text-lg mb-10">
    <Dialog.Title class="text-3xl mb-10">Verificacion por Redundancia Ciclica (CRC)</Dialog.Title>
    <p>
        Este algoritmo es uno de los mas eficientes para la deteccion de errores, usado en en multiples aplicaciones
        de telecomunicaciones como
    </p>
    <div class="w-full h-fit my-10 flex justify-center items-center">
		<Carousel.Root class=" w-72 p-4 text-center shadow-lg shadow-errores-hover">
			<Carousel.Content>
				<Carousel.Item>
					<h1 class="font-bold">Envio de paquetes por WiFi</h1>
				</Carousel.Item>
				<Carousel.Item>
					<h1 class="font-bold">Firmas Digitales</h1>
				</Carousel.Item>
                <Carousel.Item>
					<h1 class="font-bold">Uso en el Protocolo TCP</h1>
				</Carousel.Item>
                <Carousel.Item>
					<h1 class="font-bold">Almacenamiento en Memorias SSD o HDD</h1>
				</Carousel.Item>
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
	</div>
 
    <div class="text-xl font-bold mt-10 mb-5">
        ¿Cómo funciona?
    </div>
    <p>
       El algoritmo CRC consiste seleccionar un <strong>polinomio gnerador</strong> que es simplemente un numero binario
       el cual dividira nuestro mensaje original. Esto nos dara un residuo el cual se agregara al mensaje original. Luego,
       al recibir el mensaje, se vuelve a dividir el mensaje con el mismo polinomio y se verifica si el residuo es el mismo
    </p>
    <div class="text-xl font-bold my-10"> Laboratorio </div>
    <p>
        Vamos a ingresar un mensaje en binario junto a un polinomio generador y vamos a ver cual seria el mensaje
        final
    </p>
    <div class="flex justify-center items-center">
        <div class="w-1/2">
            <div class="flex  flex-col items-center">
                <div class="text-sm font-bold">Mensaje Original</div>
                <input  bind:value={mensaje} type="text" class="border-2 mt-2 p-2 ml-5 rounded-lg shadow-md" maxlength="8"/>
            </div>
            <div class="flex  flex-col  items-center mt-5">
                <div class="text-sm font-bold">Polinomio Generador</div>
                <input bind:value={polinomio} type="text" class="border-2 mt-2 p-2 ml-5 rounded-lg shadow-md" maxlength="8"/>
            </div>
        </div>
        <div class="w-1/2">
            <div class="flex flex-col justify-center items-center mt-5">
                <div class="text-xl font-bold">Mensaje Final</div>
                <div class="h-10 mt-4">
                    {#if residuo}
                    <p class="border-2 mt-2 p-2 ml-5 rounded-lg shadow-md">{mensaje}<strong>{residuo}</strong></p>
                {/if}
                </div>
                
                
            </div>
        </div>
    </div>

    <div class="text-xl font-bold my-10"> Video Explicativo </div>
    En el siguiente video se muestra detalladamente como obtener este residuo y el mensaje final
    <div class="video-container mt-5 w-full flex justify-center">
		<iframe
			width="560"
			height="315"
			class="rounded-lg w-2/3 shadow-lg"
			src="https://www.youtube.com/embed/_NkXZekQsQk"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			title="Metodo de Cesar"
		></iframe>
	</div>
    

</div>