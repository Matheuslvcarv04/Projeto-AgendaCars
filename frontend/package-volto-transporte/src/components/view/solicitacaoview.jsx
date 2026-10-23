import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Button, Message, Segment } from 'semantic-ui-react';

import { createSolicitacao } from '../../actions/transporte';
import AppShell from '../AppShell';
import useUser from '@plone/volto/hooks/user/useUser';

const SolicitacaoView = () => {
  const dispatch = useDispatch();
  const user = useUser();
  const status = useSelector((state) => state.transporte?.solicitacao);
  const [form, setForm] = useState({
    setor: '', data: '', horario_saida: '', local_saida: '',
    destino: '', qtd_passageiros: 1, motivo: '', vai_dirigir: false,
    nome_motorista: '', matricula_motorista: '', cnh_motorista: '',
    validade_cnh_motorista: '', telefone_motorista: '',
  });

  const update = (field) => (event, data) => {
    const value = data?.checked ?? data?.value ?? event.target.value;
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      qtd_passageiros: Number(form.qtd_passageiros),
    };
    if (!form.vai_dirigir) {
      delete payload.nome_motorista;
      delete payload.matricula_motorista;
      delete payload.cnh_motorista;
      delete payload.validade_cnh_motorista;
      delete payload.telefone_motorista;
    }
    dispatch(createSolicitacao(payload));
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
          <Form.Input
            label="Solicitante"
            value={user?.fullname || user?.username || 'Usuário autenticado'}
            readOnly
          />
          <Form.Input label="Setor" required value={form.setor} onChange={update('setor')} />
          <Form.Input label="Data" type="date" required value={form.data} onChange={update('data')} />
          <Form.Input label="Horário de saída" type="time" required value={form.horario_saida} onChange={update('horario_saida')} />
          <Form.Input label="Local de saída" required value={form.local_saida} onChange={update('local_saida')} />
          <Form.Input label="Destino" required value={form.destino} onChange={update('destino')} />
          <Form.Input label="Passageiros" type="number" min="1" required value={form.qtd_passageiros} onChange={update('qtd_passageiros')} />
          <Form.TextArea label="Motivo da viagem" required value={form.motivo} onChange={update('motivo')} />
          <Form.Checkbox
            label="Eu serei o motorista desta viagem"
            checked={form.vai_dirigir}
            onChange={update('vai_dirigir')}
          />
          {form.vai_dirigir && (
            <Segment>
              <h3>Dados para cadastro de motorista</h3>
              <p>O administrador revisará estes dados antes de liberar o acesso de motorista.</p>
              <Form.Input label="Nome" required value={form.nome_motorista} onChange={update('nome_motorista')} />
              <Form.Input label="Matrícula" required value={form.matricula_motorista} onChange={update('matricula_motorista')} />
              <Form.Input label="CNH" required value={form.cnh_motorista} onChange={update('cnh_motorista')} />
              <Form.Input label="Validade da CNH" type="date" required value={form.validade_cnh_motorista} onChange={update('validade_cnh_motorista')} />
              <Form.Input label="Telefone" type="tel" required value={form.telefone_motorista} onChange={update('telefone_motorista')} />
            </Segment>
          )}
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
