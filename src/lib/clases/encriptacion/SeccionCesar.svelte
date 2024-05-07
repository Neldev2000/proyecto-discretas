<script lang="ts">
	import PaginacionCesar from "$lib/clases/encriptacion/PaginacionCesar.svelte";
    import { cesarCambios } from "$lib/clases/encriptacion/stores";
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


        <p>
            Este cifrado es uno de los mas simples de nuestros dias, para comprenderlo vamos a ver esta pequeña historia: <br>

            En una escuela un grupo de estudiantes decidieron hacer una competencia en parejas, el objetivo era conseguir un 
            regalo escondido por el profesor; alrededor de la escuela habian pistas que los llevarian al regalo, pero estas pistas
            estaban encriptadas.
            <br> <br>

            Una de estas parejas, conocian de antemano el metodo de Cesar, pues lo habian aprendido anteriormente para el desafio.
            Ellos al llegar a la primera pista se consiguieron con el mensaje: <strong>NOLOX SB K VKC OCMKVOBKC</strong>, los
            muchachos saben que este cifrado se basa en mover el abecedario una cantidad de posiciones hacia la derecha, es decir,
            si movemos el abecedario 3 posiciones hacia la derecha, la letra A se convierte en D, la B en E y asi sucesivamente .
            Por lo que empiezan a mover el abecedario posicion por posicion hasta descifrar el mensaje.
        </p>
            <div class="w-full flex justify-center items-center">
                <img 
                class="w-1/2 rounded-lg m-5"
                src="https://www.101computing.net/wp/wp-content/uploads/Caesar_substition_cipher-2.png" 
                alt="Movimiento de Posiciones en el abecedario"/>
            </div>
            

        

        <p>
            Para poder descifrarlo, los muchachos deben mover el abecedario hacia la izquierda, por lo que sus opciones son: <br> <br>
        </p>
            <ul class="mb-5">
                <li>1 posicion: <strong>Stqtc xg p aph thrpatgph</strong> </li>
                <li>2 posiciones: <strong>Rspsb wf o zog sgqozsfog</strong> </li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>10 posiciones: <strong>Deben ir a las escaleras</strong> </li>
            </ul>
        

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
                <h1>{textoCifrado}</h1>
                <input placeholder="Escribe tu mensaje secreto" type="text" bind:value={textoCesar} class="bg-blue font-bold py-2 px-4 rounded-lg shadow-md border-2 border-second" />
            </div>

        </div>