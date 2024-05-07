<script>
    import { clases } from "$lib/main-page/utils/clases";
</script>

<div class=" w-fit h-full flex flex-col text-xl py-40 px-10 bg-blue mb-5 text-second font-bold">
    <h1 class="mb-10">Listado de Temas</h1>
     {#each clases as clase}
        <a class="mb-5" href={clase.enlace}>{clase.titulo}</a>
    {/each}
</div>