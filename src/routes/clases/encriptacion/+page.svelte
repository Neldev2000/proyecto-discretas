<script lang="ts">
	import SeccionCesar from "$lib/clases/encriptacion/SeccionCesar.svelte";
    import SeccionVigenere from "$lib/clases/encriptacion/SeccionVigenere.svelte";
    import SeccionRSA from "$lib/clases/encriptacion/SeccionRSA.svelte";
 
    import * as Dialog from "$lib/components/ui/dialog";

	import CardEncryption from "$lib/clases/encriptacion/CardEncryption.svelte";
   
  const methods = [
    {
      titulo: "Cifrado de Cesar",
      imagen: "/encriptacion/cesar.jpeg",
      content: "cesar"
    }, {
      titulo: "Cifrado de Vigenère",
      imagen: "/encriptacion/vigenere.jpeg",
      content: "vigenere"
    },
    {
      titulo: "Cifrado RSA",
      imagen: "/encriptacion/rsa.jpeg",
      content: "rsa"
    }
  ]

</script>

<div class=" w-full text-lg">

  <div class="flex p-10 gap-x-20 mt-10 mr-10  rounded-lg bg-gradient-to-bl from-encriptacion-end-gradient to-encriptacion-start-gradient"
  >
    <img src="/encriptacion/main.jpeg"
    class="rounded-lg w-80 h-80" alt="">
    <div class="mt-10 mr-10">
      <h1 class="font-bold text-5xl" >Encriptacion de Mensajes</h1>
      <h1 class="text-3xl mt-10">
        Descubriendo formas de proteger nuestra información
      </h1>
    </div>
  </div>

	

	<div class="mt-10 gap-x-40 mr-20">
		<p>
			Para poder comprender el encriptado y sus algoritmos, primero debemos conocer las motivaciones
			que nos han llevado a crear esta herramienta con infinidad de beneficios en nuestra
			actualidad.
			<br /><br />
			La necesidad del ser humano de resguardar informacion importante para que otras personas no la
			vean llevo a Militares, Matematicos e Ingenieros a romper las barreras del lenguaje comun y crear
			mensajes ocultos de tal manera que solo un selecto grupo con conocimiento del como se estructuran
			esos mensajes puedan interpretarlos.
			<br /><br />
			Es por eso que en esta seccion aprenderemos sobre los algoritmos de encriptacion mas conocidos, llendo
      desde el primer mecanismo de encriptado conocido como Cifrado de Cesar, hasta el mas reciente y utilizando
      hoy en dia como lo es el Cifrado RSA.
		</p>

    <h2 class="w-full flex justify-center font-bold text-3xl mt-20">Algoritmos de Cifrado</h2>

    <div class="mx-20 my-10 grid grid-cols-3 justify-center w-full">
      {#each methods as method}
      <Dialog.Root>
        <Dialog.Trigger class="w-fit"> <CardEncryption titulo={method.titulo} imagen={method.imagen} /> </Dialog.Trigger>
        <Dialog.Content class="sm:max-w-4xl sm:max-h-[700px] overflow-y-auto">
          {#if method.content === "cesar"}
            <SeccionCesar />
          {/if}
          {#if method.content === "vigenere"}
            <SeccionVigenere />
          {/if}
          {#if method.content === "rsa"}
            <SeccionRSA />
            
          {/if}
        </Dialog.Content>
      </Dialog.Root>
        
      {/each}
      

      

    </div>

      
        
	</div>
</div>
