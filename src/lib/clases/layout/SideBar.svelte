<script>
    import { clases } from '$lib/main-page/utils/clases';
    import { page } from '$app/stores';  

</script>

<div class=" w-fit h-full flex flex-col text-xl py-40 px-10 mb-5 font-bold gap-y-5">
    <a href="/" class="mb-10 text-2xl">Volver al inicio</a>
  
    {#each clases as clase}
        <a class="mb-5 flex h-20  justify-between items-center gap-x-5" href={clase.enlace} >
            {#if $page.url.pathname.includes(clase.enlace)}
                <h1 class={`p-3 rounded-lg ${clase.colorSideBar}`}>{clase.titulo}</h1>
            {:else}
                <h1 class="p-3">{clase.titulo}</h1>
            {/if}
        </a>
    {/each}
</div>
