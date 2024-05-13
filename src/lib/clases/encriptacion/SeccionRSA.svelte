<script lang="ts">
    import * as Dialog from "$lib/components/ui/dialog";
    import * as Carousel from "$lib/components/ui/carousel";
</script>


<div class="text-lg">
    <Dialog.Title class="text-3xl">
        Cifrado RSA
    </Dialog.Title>

    <h2 class="text-xl font-bold mb-4 mt-6">Breve Historia</h2>
    <p>
        Con el avance de la tecnologia y la computacion, todos estos metodos han quedado poco a poco obsoletos,
        pues, esta nueva herramienta nos permite descifrar mensajes en cuestion de segundos. Por lo que investigadores
        empezaron a buscar nuevas formas de encriptar mensajes y asi nacio el algoritmo RSA. 
    </p>
    <h2 class="text-xl font-bold mb-4 mt-6">¿Cómo funciona?</h2>
    <p>
        Para comprender RSA, debemos recordar que en el cifrado de  Vigenere utilizabamos una llave privada para
        cifrar y descifrar mensajes, pero esta llave las unicas personas que tenian conocimiento de esto era el emisor
        y el receptor. Pero RSA va mas alla, pues, utiliza dos llaves, una publica y una privada. Es decir, un codigo
        que todo el mundo puede conocer sin miedo a que alguien pueda descifrar el mensaje. Y otra llave que solo el
        receptor conoce, para descifrar el mensaje.
        <br><br> 
        El algoritmo RSA se basa en la factorizacion de numeros primos, es decir, se eligen dos numeros primos p y q muy
        grandes y se multiplican, este nuevo numero va a ser la llave publica, y tu llave privada van a ser estos numeros
        p y q. Resulta que hallar estos nuevos numeros a partir de la llave publica es muy dificil (una computadora
        pudiese tardar miles de años en hacerlo), pero si tienes la llave privada, es muy facil. 
    </p>

    <h2 class="text-xl font-bold mb-4 mt-6">Pasos a seguir</h2>
    <div class="w-full flex justify-center items-center rounded-lg">
        <Carousel.Root class=" w-52 text-center shadow-lg ">
            <Carousel.Content>
             
                <Carousel.Item>
                  <div class="p-2   hover:border-encriptacion-hover flex flex-col items-center justify-center">
                    Escoge dos numeros primos muy grandes p y q y Haz n = p*q
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="p-2 h-full   hover:border-encriptacion-hover flex items-center justify-center   ">
                      Haz f(n) = (p-1)(q-1)
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div class="p-2 h-full   hover:border-encriptacion-hover flex flex-col items-center justify-center   ">
                      <strong>Llave publica</strong> e que es coprimo de f(n) y menor que f(n), es decir mcd(e,f(n)) = 1
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div class="p-2 h-full   hover:border-encriptacion-hover flex flex-col items-center justify-center   ">
                      <strong>Llave privada</strong> d que satisface la congruencia e*d ≡ 1 mod f(n) 
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div class="p-2 h-full font-bold  hover:border-encriptacion-hover flex flex-col items-center justify-center   ">
                      <div>
                        Llave publica: (n,e)
                      </div>
                        <div>
                            Llave privada: (n,d)
                    </div>
                  </Carousel.Item>
              
            </Carousel.Content>
            <Carousel.Previous />
            <Carousel.Next />
          </Carousel.Root>
    </div>
    

    <p class="mt-10">Habiendo visto esto, se muestra ademas un video pra entender mejor el metodo RSA</p>
    
    <p class="font-bold text-2xl my-10">Video Explicativo</p>
	<div class="video-container w-full flex justify-center">
		<iframe
			width="560"
			height="315"
			class="rounded-lg w-1/2"
			src="https://www.youtube.com/embed/Q8K311s7EiM"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			title="Metodo de RSA"
		></iframe>
	</div>

    
</div>