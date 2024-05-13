<script>
    import * as Dialog from '$lib/components/ui/dialog';
    import * as Table from '$lib/components/ui/table';
</script>

<div class="text-lg mb-10">
    <Dialog.Title class="text-3xl mb-10">Repeticion de Bits</Dialog.Title>
    <p>
        Una forma facil de correguir un mensaje o  cerciorarse de que no ha sido alterado es generar una Redundancia
        de los datos, es decir, enviar los mismos datos mas de una vez. Este metodo se conoce como Repeticion de Bits.
        </p>
        <br>
    <p>
        Una forma de trabajar este metodo es enviar cada bit del mensaje 3 veces, luego el receptor puede verificar
        tomara el valor que se repite 2 de 3 veces. Vamos a ver un ejemplo de como se veria esto
    </p>
    <div class="text-xl font-bold mt-10 mb-5">
        Ejemplo
    </div>
    <Table.Root>
        <Table.Header>
            <Table.Row>
				<Table.Head>Bit Original</Table.Head>
				<Table.Head>Secuencia Enviada</Table.Head>
				<Table.Head>Bit Interpretado</Table.Head>
			</Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>0, <strong>1</strong>, <strong>1</strong></Table.Cell>
                <Table.Cell>1</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>0</Table.Cell>
                <Table.Cell><strong>0</strong>, <strong>0</strong>, <strong>0</strong></Table.Cell>
                <Table.Cell>0</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>0</Table.Cell>
                <Table.Cell><strong>0</strong>, <strong>0</strong>, 1</Table.Cell>
                <Table.Cell>0</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table.Root>

   
    <div class="text-xl font-bold mt-10 mb-5"> Detalles a considear </div>
    <p>
        Como vemos, este algoritmo es muy facil de implementar, mas sin embargo el enviar multiples veces el mismo
        mensaje puede ralentizar la transmision de datos, generando congestion en la red. Por lo que con el tiempo
        matematicos e ingenieros han desarrollado metodos mas eficientes para la correccion de errores.
    </p>

</div>