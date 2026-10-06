export const LOAD_DISPONIBILIDADE = 'transporte/LOAD_DISPONIBILIDADE';
export const LOAD_PAINEL = 'transporte/LOAD_PAINEL';
export const LOAD_RELATORIO_MENSAL = 'transporte/LOAD_RELATORIO_MENSAL';
export const LOAD_SOLICITACOES = 'transporte/LOAD_SOLICITACOES';
export const CREATE_SOLICITACAO = 'transporte/CREATE_SOLICITACAO';
export const TRANSITION_SOLICITACAO = 'transporte/TRANSITION_SOLICITACAO';
export const LOAD_ABASTECIMENTOS = 'transporte/LOAD_ABASTECIMENTOS';
export const CREATE_ABASTECIMENTO = 'transporte/CREATE_ABASTECIMENTO';

export function loadAbastecimentos() {
  return {
    type: LOAD_ABASTECIMENTOS,
    request: { op: 'get', path: '@search?portal_type=Abastecimento&sort_on=sortable_title' },
  };
}

export function createAbastecimento(data) {
  return {
    type: CREATE_ABASTECIMENTO,
    request: { op: 'post', path: '', data: { '@type': 'Abastecimento', ...data } },
  };
}

export function loadSolicitacoes() {
  return {
    type: LOAD_SOLICITACOES,
    request: {
      op: 'get',
      path: '@search?portal_type=Solicitacao&review_state=pendente&fullobjects=1',
    },
  };
}

export function createSolicitacao(data) {
  return {
    type: CREATE_SOLICITACAO,
    request: {
      op: 'post',
      path: '',
      data: { '@type': 'Solicitacao', ...data },
    },
  };
}

export function transitionSolicitacao(url, transition) {
  return {
    type: TRANSITION_SOLICITACAO,
    request: {
      op: 'post',
      path: `${url}/@workflow`,
      data: { transition },
    },
  };
}

export function loadDisponibilidade(data) {
  return {
    type: LOAD_DISPONIBILIDADE,
    request: {
      op: 'get',
      path: `@disponibilidade?data=${encodeURIComponent(data)}`,
    },
  };
}

export function loadPainel() {
  return {
    type: LOAD_PAINEL,
    request: {
      op: 'get',
      path: '@painel',
    },
  };
}

export function loadRelatorioMensal(mes) {
  return {
    type: LOAD_RELATORIO_MENSAL,
    request: {
      op: 'get',
      path: `@relatorio-mensal?mes=${encodeURIComponent(mes)}`,
    },
  };
}
