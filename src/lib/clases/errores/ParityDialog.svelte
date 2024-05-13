<script lang="ts">
    import Icon from '@iconify/svelte';
    import * as Dialog from "$lib/components/ui/dialog";
    import * as Table from '$lib/components/ui/table';
</script>

<div class="text-lg mb-10">
    <Dialog.Title class="text-3xl mb-10">Codigo de Paridad</Dialog.Title>
    <p>
        Consiste en agregar un bit extra al mensaje que se envia, de tal forma que
		la cantidad de 1s totales sea par.
    </p>
    <div class="text-xl font-bold my-10"> Ejemplo </div>
    <Table.Root>
        <Table.Header>
            <Table.Row>
				<Table.Head>Mensaje Original</Table.Head>
				<Table.Head>Bit de Paridad</Table.Head>
				<Table.Head>Mensaje Final</Table.Head>
			</Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell>1001</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>1001<strong>0</strong></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>1011</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>1011<strong>1</strong></Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table.Root>

    <div class="text-xl font-bold mt-10 mb-5">
        ¿Cómo funciona?
    </div>
    <p>
        Una vez tanto el el emisor como el receptor acuerdan esta paridad, y que el mensaje fue recibido,
        el receptor debe simplemente verificar si estar paridad se sigue manteniendo. En el caso de que no,
        se detectaria el error 
    </p>
    <div class="text-xl font-bold my-10"> Ejemplo </div>
    <Table.Root>
        <Table.Header>
            <Table.Row>
                <Table.Head>Mensaje Original</Table.Head>
				<Table.Head>Mensaje Recibido</Table.Head>
				<Table.Head>Cantidad de 1s recibidos</Table.Head>
				<Table.Head>Se Detecto un error</Table.Head>
			</Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell>1001</Table.Cell>
                <Table.Cell>1001</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell> <Icon icon="clarity:error-solid" class="text-2xl text-red"/>  </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>1111</Table.Cell>
                <Table.Cell>1<strong>0</strong>11</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell><Icon icon="lets-icons:check-fill" class="text-2xl text-green"/></Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table.Root>

    <div class="text-xl font-bold mt-10 mb-5"> Detalles a considear </div>
    <p>
        Como vimos la Paridad nos permite detectar si <strong>un numero impar de bits</strong> fue alterado, pero
        en el caso de que se alteren 2, 4, ... bits esta deteccion directamente falla pues la paridad se mantiene, es por 
        eso que se han manejado otro tipo de algoritmos como <strong>CheckSum</strong> o <strong>CRC</strong>.
    </p>


</div>