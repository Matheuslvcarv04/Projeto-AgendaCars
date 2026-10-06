import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Card, Icon, Form, Message } from 'semantic-ui-react';

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
      <Card.Group itemsPerRow={3}>
        {agendamentos.map((agenda) => (
          <Card key={agenda['@id']}>
            <Card.Content>
              <Card.Header>{agenda.horario || 'Horário não informado'}</Card.Header>
              <Card.Meta>{agenda.situacao}</Card.Meta>
              <Card.Description>
                <div><Icon name="car" /> Veículo: {agenda.veiculo?.title || 'Não atribuído'}</div>
                <div><Icon name="user" /> Motorista: {agenda.motorista?.title || 'Não atribuído'}</div>
                <div>Destino: {agenda.destino}</div>
                <div>Setor: {agenda.setor}</div>
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
        {state?.error && <Message negative>Não foi possível carregar a agenda.</Message>}
      </Container>
    </AppShell>
  );
};

export default AgendaView;
