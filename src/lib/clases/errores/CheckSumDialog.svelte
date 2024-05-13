<script lang="ts">
    import Icon from '@iconify/svelte';
    import * as Dialog from "$lib/components/ui/dialog";
    import * as Table from '$lib/components/ui/table';
</script>

<div class="text-lg mb-10">
    <Dialog.Title class="text-3xl mb-10">CheckSum</Dialog.Title>
    <p>
        Este metodo de deteccion de errores consiste en realizar la suma de los bits del mensaje (o contar los 1s)
        y agregarlo al final del mensaje para su futura verificacion
    </p>
    <div class="text-xl font-bold my-10"> Ejemplo </div>
    <Table.Root>
        <Table.Header>
            <Table.Row>
				<Table.Head>Mensaje Original</Table.Head>
				<Table.Head>Suma de Bits</Table.Head>
				<Table.Head>Mensaje Final</Table.Head>
			</Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell>1001</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>1001<strong>0010</strong></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>1011</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>1011<strong>0011</strong></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>1000</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>1000<strong>0001</strong></Table.Cell>
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

</div>