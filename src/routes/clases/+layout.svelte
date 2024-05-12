<script>
    import SideBar from "$lib/clases/layout/SideBar.svelte";
</script>

<div class="w-screen h-screen flex bg-backgroundColor">
    <SideBar/>
    <div class="overflow-y-auto h-screen">
        <slot />
    </div>
    
</div>
