import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Message, Table } from 'semantic-ui-react';

import { loadMotoristas, updateMotorista } from '../../actions/transporte';
import AppShell from '../AppShell';

const MotoristasAdmin = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.transporte?.motoristas);
  const updateState = useSelector((store) => store.transporte?.motorista);
  const motoristas = state?.data || [];

  useEffect(() => {
    dispatch(loadMotoristas());
  }, [dispatch, updateState?.data]);

  const alterarSituacao = (motorista, situacao) => {
    dispatch(updateMotorista(motorista['@id'], { situacao }));
  };

  return (
    <AppShell
      activePath="/motoristas"
      title="Motoristas cadastrados"
      description="Revise os dados e aprove ou suspenda o acesso de motorista."
    >
      <Container style={{ marginTop: '2em' }}>
        {state?.error && <Message negative>Não foi possível carregar os motoristas.</Message>}
        {updateState?.error && <Message negative>Não foi possível atualizar o cadastro.</Message>}
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nome</Table.HeaderCell>
              <Table.HeaderCell>Matrícula</Table.HeaderCell>
              <Table.HeaderCell>CNH</Table.HeaderCell>
              <Table.HeaderCell>Validade</Table.HeaderCell>
              <Table.HeaderCell>Telefone</Table.HeaderCell>
              <Table.HeaderCell>Situação</Table.HeaderCell>
              <Table.HeaderCell>Ações</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {motoristas.map((motorista) => (
              <Table.Row key={motorista['@id']}>
                <Table.Cell>{motorista.nome}</Table.Cell>
                <Table.Cell>{motorista.matricula}</Table.Cell>
                <Table.Cell>{motorista.cnh}</Table.Cell>
                <Table.Cell>{motorista.validade_cnh}</Table.Cell>
                <Table.Cell>{motorista.telefone}</Table.Cell>
                <Table.Cell>{motorista.situacao}</Table.Cell>
                <Table.Cell>
                  {motorista.situacao !== 'ativo' ? (
                    <Button positive onClick={() => alterarSituacao(motorista, 'ativo')}>
                      Aprovar motorista
                    </Button>
                  ) : (
                    <Button negative onClick={() => alterarSituacao(motorista, 'inativo')}>
                      Suspender acesso
                    </Button>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </AppShell>
  );
};

export default MotoristasAdmin;
