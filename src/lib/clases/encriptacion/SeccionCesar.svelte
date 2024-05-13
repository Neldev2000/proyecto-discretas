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
        <p>Ahora en el caso de que queramos revertir el mensaje simplemente debemos hacer un desplazamiento a la 
            izquierda el mismo numero de veces que lo hicimos para cifrarlo. Nuestro ejemplo quedaria asi: <br> <br>
        </p>
        <Table.Root class="">
            <Table.Header>
                <Table.Row>
                  <Table.Head >Letra Cifrada</Table.Head>
                  <Table.Head>Desplazamiento a la izquierda</Table.Head>
                  <Table.Head>Letra Original</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell class="font-medium">L</Table.Cell>
                  <Table.Cell>4</Table.Cell>
                  <Table.Cell>H</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell class="font-medium">S</Table.Cell>
                    <Table.Cell>4</Table.Cell>
                    <Table.Cell>O</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell class="font-medium">P</Table.Cell>
                    <Table.Cell>4</Table.Cell>
                    <Table.Cell>L</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell class="font-medium">E</Table.Cell>
                    <Table.Cell>4</Table.Cell>
                    <Table.Cell>A</Table.Cell>
                  </Table.Row>
              </Table.Body>
        </Table.Root>
        
        <p class="mt-5">
            Como vemos, el descifrar este mensaje es relativamente sencillo, incluso para personas que puedan
            interceptar nuestros mensajes, solo deberian hacer un maximo de 26 desplazamientos para poder descifrarlo. <br>
            Es por eso que este metodo es considerado como uno de los mas inseguros en la actualidad. y sirve como metodo
            educativo para comprender los cifrados mas complejos.
        </p>
        <br>
        <p class="my-5"> En el siguiente video se explica el cifrado Cesar con mayor detalle </p>

    <div class="video-container w-full flex justify-center">
        <iframe
            width="560"
            height="315"
            class="rounded-lg w-2/3 shadow-lg"
            src="https://www.youtube.com/embed/ttqI7EFW3Mk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Metodo de Cesar"
        ></iframe>
    </div>

    <h1 class="font-bold text-2xl my-10">Laboratorio</h1>

    <p>Habiendo visto todo, ahora es nuestro turno de escribir nuestros propios mensajes cifrados</p>

    <div class="w-full flex justify-center gap-x-40 items-center mb-20 p-5">
        <div class="flex flex-col gap-y-5 w-1/2 justify-center items-center">
            <h1 class="font-medium">
                Seleccion los desplazamientos que deseas para cifrar tu mensaje
            </h1>
            <PaginacionCesar/>
        </div>
        <div class="flex flex-col gap-y-5 w-1/2 justify-center items-center">
            <p class="font-medium">Prueba escribiendo un mensaje y se encriptara de inmediato</p>
            <h1 class="h-10">{textoCifrado}</h1>
            <input placeholder="Escribe tu mensaje secreto" type="text" bind:value={textoCesar} class="bg-white font-bold py-2 px-4 rounded-lg shadow-md border-2 " />
        </div>

    </div>
</div>
        