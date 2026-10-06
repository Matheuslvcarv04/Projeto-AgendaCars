import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Table, Button, Icon, Message } from 'semantic-ui-react';

import { loadSolicitacoes, transitionSolicitacao } from '../../actions/transporte';
import AppShell from '../AppShell';

const AprovacaoGestor = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.transporte?.solicitacoes);
  const pendentes = state?.data || [];

  useEffect(() => {
    dispatch(loadSolicitacoes());
  }, [dispatch]);

  const decidir = (item, transition) => {
    dispatch(transitionSolicitacao(item['@id'], transition)).then(() => dispatch(loadSolicitacoes()));
  };

  return (
    <AppShell
      activePath="/aprovacao-gestor"
      title="Aprovação do gestor"
      description="Revise as solicitações pendentes e registre a decisão operacional."
    >
      <Container style={{ marginTop: '2em' }}>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Número</Table.HeaderCell>
            <Table.HeaderCell>Solicitante</Table.HeaderCell>
            <Table.HeaderCell>Data/saída</Table.HeaderCell>
            <Table.HeaderCell>Destino</Table.HeaderCell>
            <Table.HeaderCell>Passageiros</Table.HeaderCell>
            <Table.HeaderCell>Motivo</Table.HeaderCell>
            <Table.HeaderCell>Ações</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {pendentes.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id || item['@id']}</Table.Cell>
              <Table.Cell>{item.solicitante}</Table.Cell>
              <Table.Cell>{item.data} {item.horario_saida}</Table.Cell>
              <Table.Cell>{item.destino}</Table.Cell>
              <Table.Cell>{item.qtd_passageiros}</Table.Cell>
              <Table.Cell>{item.motivo}</Table.Cell>
              <Table.Cell collapsing>
                <Button positive onClick={() => decidir(item, 'aprovar')}><Icon name="check" /> Aprovar</Button>
                <Button color="yellow" onClick={() => decidir(item, 'alterar')}><Icon name="edit" /> Alterar</Button>
                <Button negative onClick={() => decidir(item, 'recusar')}><Icon name="x" /> Recusar</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        {state?.error && <Message negative>Não foi possível carregar as solicitações.</Message>}
      </Container>
    </AppShell>
  );
};

export default AprovacaoGestor;
