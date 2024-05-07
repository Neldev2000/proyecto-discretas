<script>
    import SideBar from "$lib/clases/layout/SideBar.svelte";
</script>

<div class="w-screen h-screen flex ">
    <SideBar/>
    <slot />
</div>
<style lang="postcss">
	:global(html) {
		background-color: theme(colors.primary);
	}
</style>
