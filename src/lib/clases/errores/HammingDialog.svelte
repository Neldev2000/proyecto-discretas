<script>
    import Katex from '$lib/components/katex/Katex.svelte';
import * as Dialog from '$lib/components/ui/dialog';
    let G = '\\begin{bmatrix} 1&1&0&1 \\\\ 1&0&1&1 \\\\ 1&0&0&0 \\\\0&1&1&1\\\\0&1&0&0\\\\0&0&1&0 \\\\0&0&0&1 \\end{bmatrix}'
    let H = '\\begin{bmatrix} 1&0&1&0&1&0&1 \\\\ 0&1&1&0&0&1&1 \\\\ 0&0&0&1&1&1&1 \\end{bmatrix}'
    let R = '\\begin{bmatrix} 0&0&1&0&0&0&0 \\\\ 0&0&0&0&1&0&0 \\\\ 0&0&0&0&0&1&0 \\\\0&0&0&0&0&0&1 \\end{bmatrix}'

    let x = '\\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\\\ 0 \\end{bmatrix}'
    let XCoded = '\\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\\\ 0 \\\\ 0 \\\\ 1 \\\\ 1 \\end{bmatrix}' 
    let XCodedFail = '\\begin{bmatrix} 0 \\\\ 1 \\\\ 1 \\\\ 0 \\\\ 1 \\\\ 1 \\\\ 1 \\end{bmatrix}' 
    let zero = '\\begin{bmatrix} 0 \\\\ 0 \\\\ 0  \\end{bmatrix}'
    let five = '\\begin{bmatrix} 1 \\\\ 0 \\\\ 1  \\end{bmatrix}'
</script>

<Dialog.Title class="text-3xl mb-10">Codigo de Hamming</Dialog.Title>

<div>
    El Codigo de Hamming es una tecnica muy potente, pues nos permite tanto detectar errores en un mensaje
    como corregirlos de inmediato sin tantos procesos.
    <br>
    <div class="text-xl font-bold mt-10 mb-5">
        ¿Cómo funciona?
    </div>
    Este algoritmo hace uso del calculo matricial para agilizar todas las cuentas
    <br>
    Para esto vamos a usar las siguientes matrices
    <div class="grid grid-cols-2 gap-y-5 mt-5">
            <Katex math={`G = ${G}`} />
            <Katex math={`H = ${H}`}  />
            <Katex math={`R = ${R}`}  />
    </div>
    <br>
    Donde cada matriz cumple un rol especifico en el proceso de deteccion y correccion de errores. G nos permite codificar
    el mensaje, H nos permite detectar errores y R nos permite descodificarlos.

    <div class="text-xl font-bold mt-10 mb-5">
        Codificar Mensajes
    </div>

    Antes de enviar cualquier mensaje estos deben ser codificados primero, normalmente se toman bloques de 4 bits para
    codificarlos en 7 bits. a continusacion vamos a ver un ejemplo de como se veria esto
    <br>
    <div class="flex flex-col justify-center items-center gap-y-5">
        <Katex math={`x = ${x}`} />
        <Katex math={`X_{codificado} = Gx = ${G}${x} = ${XCoded}`} />
    </div>

    <div class="text-xl font-bold mt-10 mb-5">
        Deteccion de Errores
    </div>
    Para poder detectar errores al recibir un mensaje codificado, simplemente debemos multiplicar el mensaje recibido por H
    y el resultado nos va a dar la posicion en binario del error. Vamos a ver esto <br>
    <div class="flex flex-col justify-center items-center gap-y-5">
        <Katex math={`H = ${H}`} />
        <Katex math={`X_{recibido} = ${XCoded}`} />
        <Katex math={`H \\cdot X_{recibido} = ${H}${XCoded} = ${zero}`  } />
        </div>
    <p class="mt-5">
        En este caso como el mensaje es el original, el calculo indica que se encontro un error en la posicion 0,
        es decir, no se encontro ningun error. Ahora, en el caso de que tengamos un error, se veria lo siguiente: 
    </p>
    <div class="flex flex-col justify-center items-center gap-y-5">
        <Katex math={`X_{falla} = ${XCodedFail}`} />
        <Katex math={`H \\cdot X_{falla} = ${H}${XCodedFail} = ${five}`  } />
        </div>
        <p class="mt-5">
            Lo que nos indica que en la quinta posicion hay un error, y se debe correguir
        </p>

        <div class="text-xl font-bold mt-10 mb-5">
            Decodificacion
        </div>
        <p>
            Por ultimo, para poder decodificar los datos, multiplicamos R con el mensaje recibido y obtenemos el mensaje original,
            es decir 
        </p>
        <div class="flex flex-col justify-center items-center gap-y-5">
            <Katex math={`R = ${R}`} />
            <Katex math={`X_{recibido} = ${XCoded}`} />
            <Katex math={`R \\cdot X_{recibido} = ${R}${XCoded} = ${x}`}  />
        </div>

        <div class="text-xl font-bold mt-10 mb-5">
            Conclusiones
        </div>
        <p>
            Como vimos, La Codificacion de Hamming es una tecnica muy potente, pues nos permite detectar y 
            correguir errores con eficiencia inigualable.
        </p>
</div>