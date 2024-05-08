<script lang="ts">
	import SeccionCesar from "$lib/clases/encriptacion/SeccionCesar.svelte";
    import SeccionVigenere from "$lib/clases/encriptacion/SeccionVigenere.svelte";
    import SeccionRSA from "$lib/clases/encriptacion/SeccionRSA.svelte";
    import * as Accordion from "$lib/components/ui/accordion/index.js";
	
</script>

<div class="mt-10 mx-10 text-second w-full text-lg">
	<h1 class="font-bold text-5xl">Encriptacion</h1>
	<h1 class="text-3xl mt-10">
		En esta seccion aprenderas sobre los diferentes metodos de encriptacion
	</h1>
	<h1 class="font-bold text-4xl mt-20">Temas</h1>

	<div class="mt-10 gap-x-40 mr-20">
		<p>
			Para poder comprender el encriptado y sus algoritmos, primero debemos conocer las motivaciones
			que nos han llevado a crear esta herramienta con infinidad de beneficios en nuestra
			actualidad.
			<br /><br />
			La necesidad del ser humano de resguardar informacion importante para que otras personas no la
			vean llevo a Militares, Matematicos e Ingenieros a romper las barreras del lenguaje comun y crear
			mensajes ocultos de tal manera que solo un selecto grupo con conocimiento del como se estructuran
			esos mensajes puedan interpretarlos
			<br /><br />
			Asi fue el caso de Julio Cesar, quien al estar en constantes campañas militares necesitaba comunicarse 
            con sus generales a kilometros de distancia por lo que empleo un metodo de encriptacion novedoso conocido
            hoy en dia como el metodo de Cesar.
		</p>

        <Accordion.Root class="w-full sm:max-w-[90%]">
                <Accordion.Item value="cesar">
                    <Accordion.Trigger class="font-bold text-3xl my-10">Cifrado de Cesar</Accordion.Trigger>
                    <Accordion.Content
                      ><SeccionCesar />
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="vigenere">
                    <Accordion.Trigger class="font-bold text-3xl my-10">Cifrado de Vigenère</Accordion.Trigger>
                    <Accordion.Content
                      ><SeccionVigenere />
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="rsa">
                    <Accordion.Trigger class="font-bold text-3xl my-10">Cifrado RSA</Accordion.Trigger>
                    <Accordion.Content
                      ><SeccionRSA />
                    </Accordion.Content>
                </Accordion.Item>
        </Accordion.Root>
      
        
	</div>
</div>
