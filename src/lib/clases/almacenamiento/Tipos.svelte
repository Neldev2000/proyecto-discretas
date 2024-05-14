<script lang="ts">
    export let title = '';
    export let description = '';
    export let imagen = '';
</script>

<div class="w-72 h-full rounded-lg px-3 flex flex-col justify-center items-center ">
    {#if imagen}
    <img src={imagen} alt={title} class="w-20 mt-5 h-20 rounded-full" >
    {/if}
    <h1 class="text-2xl font-bold mt-5">{title}</h1>
    <p class="text-gray-600 text-center">{description}</p>
</div>