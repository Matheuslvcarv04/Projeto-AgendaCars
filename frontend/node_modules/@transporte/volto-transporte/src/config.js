import React from 'react';
import SolicitacaoView from './components/view/solicitacaoview';
import MinhasSolicitacoes from './components/view/MinhasSolicitacoes';
import AprovacaoGestor from './components/view/AprovacaoGestor';
import AgendaView from './components/view/AgendaViagensView';
import ChecklistView from './components/view/ChecklistView';
import AbastecimentoForm from './components/view/AbastecimentoForm';
import PainelGeral from './components/view/PainelGeral';
import MotoristasAdmin from './components/view/MotoristasAdmin';
import DisponibilidadeView from './components/view/DisponibilidadeView';
import RelatorioMensalView from './components/view/RelatorioMensalView';
import AccessGuard from './components/AccessGuard';

const applyConfig = (config) => {
  config.addonRoutes = [
    ...(config.addonRoutes || []),
    {
      path: '/solicitacao',
      component: (props) => <AccessGuard component={SolicitacaoView} {...props} />,
    },
    {
      path: '/minhas-solicitacoes',
      component: (props) => <AccessGuard component={MinhasSolicitacoes} roles={['Solicitante']} {...props} />,
    },
    {
      path: '/aprovacao-gestor',
      component: (props) => <AccessGuard component={AprovacaoGestor} roles={['Manager', 'Administrador']} {...props} />,
    },
    {
      path: '/agenda',
      component: (props) => <AccessGuard component={AgendaView} roles={['Manager', 'Motorista']} {...props} />,
    },
    {
      path: '/checklist',
      component: (props) => <AccessGuard component={ChecklistView} roles={['Manager', 'Motorista']} {...props} />,
    },
    {
      path: '/abastecimento',
      component: (props) => <AccessGuard component={AbastecimentoForm} roles={['Manager', 'Motorista']} {...props} />,
    },
    {
      path: '/painel',
      component: (props) => <AccessGuard component={PainelGeral} roles={['Manager', 'Administrador']} {...props} />,
    },
    {
      path: '/motoristas',
      component: (props) => <AccessGuard component={MotoristasAdmin} roles={['Manager', 'Administrador']} {...props} />,
    },
    {
      path: '/disponibilidade',
      component: (props) => <AccessGuard component={DisponibilidadeView} roles={['Manager', 'Administrador']} {...props} />,
    },
    {
      path: '/relatorio-mensal',
      component: (props) => <AccessGuard component={RelatorioMensalView} roles={['Manager', 'Administrador']} {...props} />,
    },
  ];

  return config;
};

export default applyConfig;