<script lang="ts">
	import PaginacionCesar from "$lib/clases/encriptacion/PaginacionCesar.svelte";
    import { cesarCambios } from "$lib/clases/encriptacion/stores";
	import * as Dialog from "$lib/components/ui/dialog";
    import * as Table from "$lib/components/ui/table";
    let textoCesar = "";
    const cifrarCesar = (texto:string, desplazamiento:number) => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        return texto.toUpperCase().split('').map(char => {
            const pos = alphabet.indexOf(char);
            if (pos === -1) return char;
            const newPos = (pos + desplazamiento) % alphabet.length;
            return alphabet[newPos];
        }).join('');
    }

    $: textoCifrado = cifrarCesar(textoCesar, $cesarCambios);
</script>

<Dialog.Title class="text-3xl">
    Cifrado de Cesar
</Dialog.Title>

<div class="text-lg">
    
    <h2 class="text-xl font-bold mb-4">Breve Historia</h2>
    <p>
        El cifrado César debe su nombre al emperador romano Julio César, quien usaba este método para 
        comunicarse con sus generales en medio de una batalla. Creando asi el primer cifrado conocido en la historia.
    </p>
    <h2 class="text-xl font-bold mb-4 mt-6">¿Cómo funciona?</h2>
    <p>
        Este cifrado es un metodo sencillo pero ingenioso que sustituye cada letra por otra en un número 
        fijo de posiciones en el alfabeto. Funciona de la siguiente manera. <br>
        Escojamos un numero determinado, por ejemplo el 4 <br>
        Tome cada letra del mensaje original y la desplacemos hacia abajo en el alfabeto 4 posiciones.
        Si la letra pasa de la «Z», se vuelve al principio del alfabeto.
    </p>
        <div class="w-full flex justify-center items-center">
            <img 
            class="w-1/2 rounded-lg m-5"
            src="https://www.101computing.net/wp/wp-content/uploads/Caesar_substition_cipher-2.png" 
            alt="Movimiento de Posiciones en el abecedario"/>
        </div>
        <h2 class="text-xl font-bold mb-4 mt-6">¡Vamos a cifrar!</h2>
        <p>
            Supongamos que queremos cifrar la palabra <strong>«HOLA»</strong>  utilizando un desplazandolo 4 posiciones. Asi quedaria nuestro mensaje cifrado: <br> <br>
        </p>
      
            <Table.Root class="">
                <Table.Header>
                    <Table.Row>
                      <Table.Head >Letra Original</Table.Head>
                      <Table.Head>Desplazamiento a la derecha</Table.Head>
                      <Table.Head>Letra Cifrada</Table.Head>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell class="font-medium">H</Table.Cell>
                      <Table.Cell>4</Table.Cell>
                      <Table.Cell>L</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell class="font-medium">O</Table.Cell>
                        <Table.Cell>4</Table.Cell>
                        <Table.Cell>S</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell class="font-medium">L</Table.Cell>
                        <Table.Cell>4</Table.Cell>
                        <Table.Cell>P</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell class="font-medium">A</Table.Cell>
                        <Table.Cell>4</Table.Cell>
                        <Table.Cell>E</Table.Cell>
                      </Table.Row>
                  </Table.Body>
            </Table.Root>

        <p class="mt-5">Por lo que nuestro mensaje cifrado queda como <strong>LSPE</strong> </p>
        <br>
        <p>Ahora en el caso de que </p>

    

    <div class="video-container w-full flex justify-center">
        <iframe
            width="560"
            height="315"
            class="rounded-lg w-1/2"
            src="https://www.youtube.com/embed/ttqI7EFW3Mk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Metodo de Cesar"
        ></iframe>
    </div>

    <h1 class="font-bold text-2xl my-10">Laboratorio</h1>

    <p>En este Laboratorio podras armar tus propios mensajes usando el cifrado de Cesar</p>

    <div class="w-full flex justify-center gap-x-40 items-center mb-20 p-5">
        <div class="flex flex-col gap-y-5 w-1/2 justify-center items-center">
            <h1 class="font-bold">
                Puedes seleccionar la cantidad de posiciones que deseas mover el abecedario (la lista de abajo es de referencia para los Movimiento)
            </h1>
            <PaginacionCesar/>
        </div>
        <div class="flex flex-col gap-y-5 w-1/2 justify-center items-center">
            <p class="font-bold">Prueba escribiendo un mensaje y se encriptara de inmediato</p>
            <h1>{textoCifrado}</h1>
            <input placeholder="Escribe tu mensaje secreto" type="text" bind:value={textoCesar} class="bg-blue font-bold py-2 px-4 rounded-lg shadow-md border-2 border-second" />
        </div>

    </div>
</div>
        