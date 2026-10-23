import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, Form, Button, Message, Segment, Table } from 'semantic-ui-react';
import useUser from '@plone/volto/hooks/user/useUser';

import { createAbastecimento, loadAbastecimentos } from '../../actions/transporte';
import AppShell from '../AppShell';

const AbastecimentoForm = () => {
  const dispatch = useDispatch();
  const lista = useSelector((state) => state.transporte?.abastecimentos);
  const status = useSelector((state) => state.transporte?.abastecimento);
  const user = useUser();
  const canViewHistory = user?.roles?.includes('Manager');
  const [form, setForm] = useState({
    veiculo: '', data: new Date().toISOString().slice(0, 10), quilometragem: 0,
    litros: 0, valor: 0, posto: '', motorista: '',
  });

  useEffect(() => {
    if (canViewHistory) dispatch(loadAbastecimentos());
  }, [dispatch, canViewHistory, status?.data]);

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const submit = (event) => {
    event.preventDefault();
    dispatch(createAbastecimento({
      ...form,
      quilometragem: Number(form.quilometragem),
      litros: Number(form.litros),
      valor: Number(form.valor),
      motorista: form.motorista || undefined,
    }));
  };

  return (
    <AppShell
      activePath="/abastecimento"
      title="Abastecimento"
      description="Registre o consumo de combustível e acompanhe o histórico da frota."
    >
      <Container style={{ marginTop: '2em' }}>
        <Segment>
        <Form onSubmit={submit}>
          <Form.Input label="URL do veículo" required value={form.veiculo} onChange={update('veiculo')} />
          <Form.Input label="Data" type="date" required value={form.data} onChange={update('data')} />
          <Form.Input label="Quilometragem" type="number" min="0" required value={form.quilometragem} onChange={update('quilometragem')} />
          <Form.Input label="Litros" type="number" min="0" step="0.01" required value={form.litros} onChange={update('litros')} />
          <Form.Input label="Valor" type="number" min="0" step="0.01" required value={form.valor} onChange={update('valor')} />
          <Form.Input label="Posto" required value={form.posto} onChange={update('posto')} />
          <Form.Input label="URL do motorista (opcional)" value={form.motorista} onChange={update('motorista')} />
          <Button primary type="submit">Salvar registro</Button>
          {status?.data && <Message positive>Abastecimento registrado.</Message>}
          {status?.error && <Message negative>Não foi possível registrar o abastecimento.</Message>}
        </Form>
      </Segment>
        {canViewHistory && (
          <>
            <Header as="h3">Histórico</Header>
            <Table compact striped>
              <Table.Header><Table.Row><Table.HeaderCell>Data</Table.HeaderCell><Table.HeaderCell>Km</Table.HeaderCell><Table.HeaderCell>Litros</Table.HeaderCell><Table.HeaderCell>Valor</Table.HeaderCell><Table.HeaderCell>Posto</Table.HeaderCell></Table.Row></Table.Header>
              <Table.Body>{(lista?.data || []).map((item) => <Table.Row key={item['@id']}><Table.Cell>{item.data}</Table.Cell><Table.Cell>{item.quilometragem}</Table.Cell><Table.Cell>{item.litros}</Table.Cell><Table.Cell>{item.valor}</Table.Cell><Table.Cell>{item.posto}</Table.Cell></Table.Row>)}</Table.Body>
            </Table>
          </>
        )}
      </Container>
    </AppShell>
  );
};

export default AbastecimentoForm;
