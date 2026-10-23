import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Message, Statistic, Grid, Segment } from 'semantic-ui-react';

import { loadRelatorioMensal } from '../../actions/transporte';
import AppShell from '../AppShell';

const RelatorioMensalView = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.transporte?.relatorioMensal);
  const [mes, setMes] = useState(new Date().toISOString().slice(0, 7));

  useEffect(() => {
    if (mes) dispatch(loadRelatorioMensal(mes));
  }, [dispatch, mes]);

  const relatorio = state?.data || {};

  return (
    <AppShell
      activePath="/relatorio-mensal"
      title="Relatório mensal"
      description="Consulte os principais indicadores de viagens e abastecimentos."
    >
      <Container style={{ marginTop: '2em' }}>
        <Form>
          <Form.Input label="Mês" type="month" value={mes} onChange={(event) => setMes(event.target.value)} />
        </Form>
        {state?.error && <Message negative>Não foi possível carregar o relatório.</Message>}
        <Grid columns={4} stackable>
          {[
            ['Total de viagens', relatorio.total_viagens ?? 0],
            ['Km total', relatorio.km_total ?? 0],
            ['Litros', relatorio.litros ?? 0],
            ['Valor de combustível', relatorio.valor_combustivel ?? 0],
          ].map(([label, value]) => (
            <Grid.Column key={label}>
              <Segment textAlign="center">
                <Statistic label={label} value={value} />
              </Segment>
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </AppShell>
  );
};

export default RelatorioMensalView;
