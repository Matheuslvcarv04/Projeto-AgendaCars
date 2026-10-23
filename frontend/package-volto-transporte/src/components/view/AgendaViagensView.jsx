import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Message, Table } from 'semantic-ui-react';

import { loadViagens } from '../../actions/viagens';
import AppShell from '../AppShell';

const AgendaView = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.transporte?.viagens);
  const [data, setData] = useState(new Date().toISOString().slice(0, 10));
  const agendamentos = state?.data || [];

  useEffect(() => {
    dispatch(loadViagens(data));
  }, [dispatch, data]);

  return (
    <AppShell
      activePath="/agenda"
      title="Agenda de viagens"
      description="Consulte a programação de veículos e motoristas por data."
    >
      <Container style={{ marginTop: '2em' }}>
      <Form>
        <Form.Input label="Data" type="date" value={data} onChange={(event) => setData(event.target.value)} />
      </Form>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Horário</Table.HeaderCell>
            <Table.HeaderCell>Veículo</Table.HeaderCell>
            <Table.HeaderCell>Motorista</Table.HeaderCell>
            <Table.HeaderCell>Destino</Table.HeaderCell>
            <Table.HeaderCell>Setor</Table.HeaderCell>
            <Table.HeaderCell>Situação</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {agendamentos.map((agenda) => (
          <Table.Row key={agenda['@id']}>
            <Table.Cell>{agenda.horario || 'Horário não informado'}</Table.Cell>
            <Table.Cell>{agenda.veiculo?.title || 'Não atribuído'}</Table.Cell>
            <Table.Cell>{agenda.motorista?.title || 'Não atribuído'}</Table.Cell>
            <Table.Cell>{agenda.destino}</Table.Cell>
            <Table.Cell>{agenda.setor}</Table.Cell>
            <Table.Cell>{agenda.situacao}</Table.Cell>
          </Table.Row>
        ))}
        </Table.Body>
      </Table>
        {state?.error && <Message negative>Não foi possível carregar a agenda.</Message>}
      </Container>
    </AppShell>
  );
};

export default AgendaView;
