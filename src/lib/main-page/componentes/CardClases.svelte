<script lang="ts">
    export let  enlace: string, titulo: string, enlaceImagen: string, descripcion: string, hoverColor: string, fade: string;
    import { crossfade } from 'svelte/transition';
  const [send, receive] = crossfade({});
</script>

<a href={enlace} class={`w-fit `}   >
    <div 
        class={`w-72 h-80 bg-white shadow-lg rounded-lg transition-shadow duration-200 ${hoverColor}`}
    >
        <img src={enlaceImagen} alt={titulo} class="w-full h-36 object-cover rounded-t-lg">
        <div class="p-4 mt-5 ">
            <h3 class="text-xl font-bold">{titulo}</h3>
            <p class="mt-2 text-lg text-gray-600">{descripcion}</p>
        </div>
    </div>
</a>
