<script>
    export let canal, descripcion, imagen;
</script>

<div class="w-72 h-fit rounded-lg px-3">
    <div class="flex flex-col items-center justify-center">
        <img src={imagen} alt={canal} class="w-20  h-20 rounded-full" />
        <h4 class="text-2xl font-bold mt-5">{canal}</h4>
        <p class="text-center text-gray-600">{descripcion}</p>
    </div>
</div>