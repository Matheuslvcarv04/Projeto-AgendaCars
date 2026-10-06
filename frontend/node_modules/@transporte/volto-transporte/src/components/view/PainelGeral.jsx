import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Statistic, Segment, Grid } from 'semantic-ui-react';

import { loadPainel } from '../../actions/transporte';
import AppShell from '../AppShell';

const PainelGeral = () => {
  const dispatch = useDispatch();
  const painel = useSelector((state) => state.transporte?.painel);

  useEffect(() => {
    dispatch(loadPainel());
  }, [dispatch]);

  const dados = painel?.data || {};
  const situacoes = dados.viagens_por_situacao || {};

  return (
    <AppShell
      activePath="/painel"
      title="Painel de operações"
      description="Acompanhamento diário da disponibilidade e da situação das viagens."
    >
      <Container style={{ marginTop: '2em' }}>
      <Grid columns={3} padded>
        <Grid.Row>
          <Grid.Column>
            <Segment className="transporte-stat transporte-stat--planned">
              <Statistic label="Viagens programadas" value={situacoes.programada ?? 0} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment className="transporte-stat transporte-stat--active">
              <Statistic label="Viagens em andamento" value={situacoes.em_andamento ?? 0} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment className="transporte-stat transporte-stat--available">
              <Statistic label="Veículos disponíveis" value={dados.veiculos_disponiveis ?? 0} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </Container>
    </AppShell>
  );
};

export default PainelGeral;
