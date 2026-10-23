import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Message, Table } from 'semantic-ui-react';

import { loadMinhasSolicitacoes } from '../../actions/transporte';
import AppShell from '../AppShell';

const MinhasSolicitacoes = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.transporte?.minhasSolicitacoes);
  const solicitacoes = state?.data || [];

  useEffect(() => {
    dispatch(loadMinhasSolicitacoes());
  }, [dispatch]);

  return (
    <AppShell
      activePath="/minhas-solicitacoes"
      title="Minhas solicitações"
      description="Consulte o andamento dos pedidos de transporte enviados por você."
    >
      <Container style={{ marginTop: '2em' }}>
        {state?.error && <Message negative>Não foi possível carregar suas solicitações.</Message>}
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Número</Table.HeaderCell>
              <Table.HeaderCell>Data e horário</Table.HeaderCell>
              <Table.HeaderCell>Destino</Table.HeaderCell>
              <Table.HeaderCell>Passageiros</Table.HeaderCell>
              <Table.HeaderCell>Situação</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {solicitacoes.map((item) => (
              <Table.Row key={item['@id']}>
                <Table.Cell>{item.id || item.title}</Table.Cell>
                <Table.Cell>{item.data} {item.horario_saida}</Table.Cell>
                <Table.Cell>{item.destino}</Table.Cell>
                <Table.Cell>{item.qtd_passageiros}</Table.Cell>
                <Table.Cell>{item.review_state || item.reviewState || 'Pendente'}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </AppShell>
  );
};

export default MinhasSolicitacoes;
