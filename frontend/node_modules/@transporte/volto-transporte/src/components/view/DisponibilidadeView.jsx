import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Grid, Message, Segment, Table } from 'semantic-ui-react';

import { loadDisponibilidade } from '../../actions/transporte';
import AppShell from '../AppShell';

const DisponibilidadeView = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.transporte?.disponibilidade);
  const [data, setData] = useState(new Date().toISOString().slice(0, 10));

  useEffect(() => {
    if (data) dispatch(loadDisponibilidade(data));
  }, [dispatch, data]);

  const resultado = state?.data || {};

  return (
    <AppShell
      activePath="/disponibilidade"
      title="Disponibilidade da frota"
      description="Consulte veículos e motoristas livres na data selecionada."
    >
      <Container style={{ marginTop: '2em' }}>
        <Form>
          <Form.Input label="Data" type="date" value={data} onChange={(event) => setData(event.target.value)} />
        </Form>
        {state?.error && <Message negative>Não foi possível consultar a disponibilidade.</Message>}
        <Grid columns={2} stackable>
          <Grid.Column>
            <Segment>
              <h3>Veículos disponíveis</h3>
              <Table basic="very">
                <Table.Body>
                  {(resultado.veiculos || []).map((veiculo) => (
                    <Table.Row key={veiculo.uid}>
                      <Table.Cell>{veiculo.placa}</Table.Cell>
                      <Table.Cell>{veiculo.modelo}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <h3>Motoristas disponíveis</h3>
              <Table basic="very">
                <Table.Body>
                  {(resultado.motoristas || []).map((motorista) => (
                    <Table.Row key={motorista.uid}>
                      <Table.Cell>{motorista.nome}</Table.Cell>
                      <Table.Cell>{motorista.matricula}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </AppShell>
  );
};

export default DisponibilidadeView;
