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
        Al tener la suma de los bits nos da una forma ciertamente certera de evaluar si alguna serie de estos cambio;
        al recibir el mensaje con la suma agregada, simplemente debemos recalcular la suma de estos numeros de nuevo
        y verificar que sea igual a este valor, en caso de que no coincidan directamente se detecta el error
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