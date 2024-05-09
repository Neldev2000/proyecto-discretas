<div class="text-lg">
    <p>
        Con el avance de la tecnologia y la computacion, todos estos metodos han quedado poco a poco obsoletos,
        pues, esta nueva herramienta nos permite descifrar mensajes en cuestion de segundos. Por lo que investigadores
        empezaron a buscar nuevas formas de encriptar mensajes y asi nacio el algoritmo RSA. 
        <br><br>
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
    <p>A continuacion se mostrara un video explicativo del metodo RSA</p>
    
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