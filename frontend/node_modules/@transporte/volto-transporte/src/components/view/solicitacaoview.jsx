import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Button, Message, Segment } from 'semantic-ui-react';

import { createSolicitacao } from '../../actions/transporte';
import AppShell from '../AppShell';

const SolicitacaoView = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.transporte?.solicitacao);
  const [form, setForm] = useState({
    solicitante: '', setor: '', data: '', horario_saida: '', local_saida: '',
    destino: '', qtd_passageiros: 1, motivo: '', prioridade: 'media',
  });

  const update = (field) => (event, data) => {
    const value = data?.value ?? event.target.value;
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSolicitacao({
      ...form,
      qtd_passageiros: Number(form.qtd_passageiros),
    }));
  };

  return (
    <AppShell
      activePath="/solicitacao"
      title="Solicitar viagem"
      description="Informe os dados do deslocamento para enviar a solicitação à análise do gestor."
    >
      <Container style={{ marginTop: '2em' }}>
        <Segment>
        <Form onSubmit={handleSubmit}>
          <Form.Input label="Solicitante" required value={form.solicitante} onChange={update('solicitante')} />
          <Form.Input label="Setor" required value={form.setor} onChange={update('setor')} />
          <Form.Input label="Data" type="date" required value={form.data} onChange={update('data')} />
          <Form.Input label="Horário de saída" type="time" required value={form.horario_saida} onChange={update('horario_saida')} />
          <Form.Input label="Local de saída" required value={form.local_saida} onChange={update('local_saida')} />
          <Form.Input label="Destino" required value={form.destino} onChange={update('destino')} />
          <Form.Input label="Passageiros" type="number" min="1" required value={form.qtd_passageiros} onChange={update('qtd_passageiros')} />
          <Form.TextArea label="Motivo da viagem" required value={form.motivo} onChange={update('motivo')} />
          <Form.Select label="Prioridade" options={[
            { text: 'Baixa', value: 'baixa' }, { text: 'Média', value: 'media' }, { text: 'Alta', value: 'alta' },
          ]} value={form.prioridade} onChange={update('prioridade')} />
          <Button primary type="submit">Enviar para Aprovação</Button>
          {status?.data && <Message positive>Solicitação enviada para análise.</Message>}
          {status?.error && <Message negative>Não foi possível enviar a solicitação.</Message>}
          </Form>
        </Segment>
      </Container>
    </AppShell>
  );
};

export default SolicitacaoView;
