<script lang="ts">
    export let titulo: string, imagen:string;

</script>

<div class=" w-56 rounded-lg shadow-lg bg-white hover:shadow-encriptacion-hover transition-shadow duration-200">
    <img src={imagen} alt="" class=" w-full rounded-t-lg">
    <h3 class="text-xl font-bold py-5">{titulo}</h3>
</div>