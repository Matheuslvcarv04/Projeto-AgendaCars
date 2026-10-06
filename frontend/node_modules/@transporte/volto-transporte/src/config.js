import SolicitacaoView from './components/view/solicitacaoview';
import AprovacaoGestor from './components/view/AprovacaoGestor';
import AgendaView from './components/view/AgendaViagensView';
import ChecklistView from './components/view/ChecklistView';
import AbastecimentoForm from './components/view/AbastecimentoForm';
import PainelGeral from './components/view/PainelGeral';

const applyConfig = (config) => {
  config.addonRoutes = [
    ...(config.addonRoutes || []),
    {
      path: '/solicitacao',
      component: SolicitacaoView,
    },
    {
      path: '/aprovacao-gestor',
      component: AprovacaoGestor,
    },
    {
      path: '/agenda',
      component: AgendaView,
    },
    {
      path: '/checklist',
      component: ChecklistView,
    },
    {
      path: '/abastecimento',
      component: AbastecimentoForm,
    },
    {
      path: '/painel',
      component: PainelGeral,
    },
  ];

  return config;
};

export default applyConfig;