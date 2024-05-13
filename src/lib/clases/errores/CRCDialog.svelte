<script lang="ts">
    import Icon from '@iconify/svelte';
    import * as Dialog from "$lib/components/ui/dialog";
    import * as Table from '$lib/components/ui/table';
    import * as Carousel from '$lib/components/ui/carousel';
</script>

<div class="text-lg mb-10">
    <Dialog.Title class="text-3xl mb-10">Verificacion por Redundancia Ciclica (CRC)</Dialog.Title>
    <p>
        Este algoritmo es uno de los mas eficientes para la deteccion de errores, usado en en multiples aplicaciones
        de telecomunicaciones como
    </p>
    <div class="w-full h-fit my-10 flex justify-center items-center">
		<Carousel.Root class=" w-72 p-4 text-center shadow-lg shadow-errores-hover">
			<Carousel.Content>
				<Carousel.Item>
					<h1 class="font-bold">Envio de paquetes por WiFi</h1>
				</Carousel.Item>
				<Carousel.Item>
					<h1 class="font-bold">Firmas Digitales</h1>
				</Carousel.Item>
                <Carousel.Item>
					<h1 class="font-bold">Uso en el Protocolo TCP</h1>
				</Carousel.Item>
                <Carousel.Item>
					<h1 class="font-bold">Almacenamiento en Memorias SSD o HDD</h1>
				</Carousel.Item>
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
	</div>
 
    <div class="text-xl font-bold mt-10 mb-5">
        ¿Cómo funciona?
    </div>
    <p>
       El algoritmo CRC consiste seleccionar un polin
    </p>

    <div class="text-xl font-bold my-10"> Ejemplo </div>
    <Table.Root>
        <Table.Header>
            <Table.Row>
                <Table.Head>Mensaje Original</Table.Head>
				<Table.Head>Mensaje Recibido</Table.Head>
                <Table.Head>Suma Original</Table.Head>
				<Table.Head>Suma al Recibir</Table.Head>
				<Table.Head>Se Detecto un error</Table.Head>
			</Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell>10010010</Table.Cell>
                <Table.Cell>10010010</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell> <Icon icon="clarity:error-solid" class="text-2xl text-red"/>  </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>11110100</Table.Cell>
                <Table.Cell>11<strong>0</strong>10100</Table.Cell>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell><Icon icon="lets-icons:check-fill" class="text-2xl text-green"/></Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table.Root>
    <div class="text-xl font-bold mt-10 mb-5"> Detalles a considear </div>
    <p>
        Este algoritmo de deteccion de errores proporcionar una mayor precision respecto a la Validacion de Paridad,
        mas sin embargo hay casos donde en algoritmo falla. Supongamos que tenemos el mensaje original <strong>1001</strong>, 
        y al recibir, este se convierte en <strong>0110</strong> la suma total no cambiar pero el mensaje es completamente
        distinto. Es por eso que en la actualidad se utiliza el algoritmo <strong>CRC</strong> en los casos practicos.
    </p>

</div>