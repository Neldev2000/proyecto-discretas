<script lang="ts">
    export let  enlace: string, titulo: string, enlaceImagen: string, descripcion: string, hoverColor: string;
    
</script>

<a href={enlace} class={`w-fit `} >
    <div 
        class={`w-72 h-80 shadow-lg rounded-lg transition-shadow duration-200 hover:shadow-${hoverColor}-hover`}
    >
        <img src={enlaceImagen} alt={titulo} class="w-full h-36 object-cover rounded-t-lg">
        <div class="p-4 mt-5 ">
            <h3 class="text-xl font-bold">{titulo}</h3>
            <p class="mt-2 text-lg text-gray-600">{descripcion}</p>
        </div>
    </div>
</a>
