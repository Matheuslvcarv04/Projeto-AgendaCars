import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Button, Message, Segment } from 'semantic-ui-react';

import { updateViagem } from '../../actions/viagem';
import { loadViagens } from '../../actions/viagens';
import AppShell from '../AppShell';

const CHECKLIST_FIELDS = [
  ['pneus', 'Pneus'], ['freios', 'Freios'], ['farois', 'Faróis'],
  ['lanternas', 'Lanternas'], ['limpadores', 'Limpadores'], ['cintos', 'Cintos'],
  ['combustivel_ok', 'Combustível ok'], ['documentacao', 'Documentação'],
  ['extintor', 'Extintor'],
];

const ChecklistView = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.transporte?.viagem);
  const viagens = useSelector((state) => state.transporte?.viagens);
  const [viagemUrl, setViagemUrl] = useState('');
  const [form, setForm] = useState({
    ...Object.fromEntries(CHECKLIST_FIELDS.map(([field]) => [field, false])),
    estado_geral: '', checklist_resultado: 'com_problema', km_saida: 0,
    km_chegada: 0, situacao: 'programada',
  });

  useEffect(() => {
    dispatch(loadViagens());
  }, [dispatch]);

  const setField = (field) => (event, data) => {
    setForm((current) => ({
      ...current,
      [field]: data?.checked ?? data?.value ?? event.target.value,
    }));
  };

  const submit = (event) => {
    event.preventDefault();
    if (!viagemUrl) return;

    dispatch(updateViagem(viagemUrl, {
      ...form,
      km_saida: Number(form.km_saida),
      km_chegada: Number(form.km_chegada),
      situacao: form.checklist_resultado === 'apto' ? 'em_andamento' : 'programada',
    }));
  };

  return (
    <AppShell
      activePath="/checklist"
      title="Checklist e quilometragem"
      description="Selecione uma viagem, registre a inspeção e informe os quilômetros."
    >
      <Container style={{ marginTop: '2em' }}>
        <Segment>
        <Form onSubmit={submit}>
          <Form.Select
            label="Viagem"
            placeholder="Selecione uma viagem"
            options={(viagens?.data || []).map((viagem) => ({
              key: viagem['@id'],
              text: `${viagem.title || viagem.destino} - ${viagem.horario || ''}`,
              value: viagem['@id'],
            }))}
            value={viagemUrl}
            onChange={(_event, data) => setViagemUrl(data.value)}
            required
          />
          {CHECKLIST_FIELDS.map(([field, label]) => (
            <Form.Checkbox key={field} label={label} checked={form[field]} onChange={setField(field)} />
          ))}
          <Form.TextArea label="Estado geral" value={form.estado_geral} onChange={setField('estado_geral')} />
          <Form.Select label="Resultado" value={form.checklist_resultado} options={[
            { text: 'Apto', value: 'apto' }, { text: 'Com problema', value: 'com_problema' },
          ]} onChange={setField('checklist_resultado')} />
          <Form.Input label="Km de saída" type="number" min="0" value={form.km_saida} onChange={setField('km_saida')} />
          <Form.Input label="Km de chegada" type="number" min="0" value={form.km_chegada} onChange={setField('km_chegada')} />
          <Button positive type="submit" disabled={!viagemUrl}>Salvar checklist e quilometragem</Button>
          {status?.data && <Message positive>Viagem atualizada.</Message>}
          {status?.error && <Message negative>Não foi possível atualizar a viagem.</Message>}
          </Form>
        </Segment>
      </Container>
    </AppShell>
  );
};

export default ChecklistView;
