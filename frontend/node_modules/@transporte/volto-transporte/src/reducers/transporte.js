import {
  LOAD_DISPONIBILIDADE,
  LOAD_PAINEL,
  LOAD_RELATORIO_MENSAL,
  LOAD_SOLICITACOES,
  CREATE_SOLICITACAO,
  TRANSITION_SOLICITACAO,
  LOAD_ABASTECIMENTOS,
  CREATE_ABASTECIMENTO,
} from '../actions/transporte';
import { LOAD_VIAGENS } from '../actions/viagens';
import { UPDATE_VIAGEM } from '../actions/viagem';

const initialState = {
  disponibilidade: { data: null, loading: false, error: null },
  painel: { data: null, loading: false, error: null },
  relatorioMensal: { data: null, loading: false, error: null },
  solicitacoes: { data: [], loading: false, error: null },
  solicitacao: { data: null, loading: false, error: null },
  transition: { data: null, loading: false, error: null },
  viagens: { data: [], loading: false, error: null },
  viagem: { data: null, loading: false, error: null },
  abastecimentos: { data: [], loading: false, error: null },
  abastecimento: { data: null, loading: false, error: null },
};

function requestState(state, key, loading) {
  return {
    ...state,
    [key]: {
      ...state[key],
      loading,
      error: null,
    },
  };
}

function successState(state, key, payload) {
  return {
    ...state,
    [key]: {
      data: payload,
      loading: false,
      error: null,
    },
  };
}

function failureState(state, key, error) {
  return {
    ...state,
    [key]: {
      ...state[key],
      loading: false,
      error,
    },
  };
}

export default function transporteReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${LOAD_DISPONIBILIDADE}_PENDING`:
      return requestState(state, 'disponibilidade', true);
    case `${LOAD_DISPONIBILIDADE}_SUCCESS`:
      return successState(state, 'disponibilidade', action.result);
    case `${LOAD_DISPONIBILIDADE}_FAIL`:
      return failureState(state, 'disponibilidade', action.error);
    case `${LOAD_PAINEL}_PENDING`:
      return requestState(state, 'painel', true);
    case `${LOAD_PAINEL}_SUCCESS`:
      return successState(state, 'painel', action.result);
    case `${LOAD_PAINEL}_FAIL`:
      return failureState(state, 'painel', action.error);
    case `${LOAD_RELATORIO_MENSAL}_PENDING`:
      return requestState(state, 'relatorioMensal', true);
    case `${LOAD_RELATORIO_MENSAL}_SUCCESS`:
      return successState(state, 'relatorioMensal', action.result);
    case `${LOAD_RELATORIO_MENSAL}_FAIL`:
      return failureState(state, 'relatorioMensal', action.error);
    case `${LOAD_SOLICITACOES}_PENDING`:
      return requestState(state, 'solicitacoes', true);
    case `${LOAD_SOLICITACOES}_SUCCESS`:
      return successState(state, 'solicitacoes', action.result?.items || []);
    case `${LOAD_SOLICITACOES}_FAIL`:
      return failureState(state, 'solicitacoes', action.error);
    case `${CREATE_SOLICITACAO}_PENDING`:
      return requestState(state, 'solicitacao', true);
    case `${CREATE_SOLICITACAO}_SUCCESS`:
      return successState(state, 'solicitacao', action.result);
    case `${CREATE_SOLICITACAO}_FAIL`:
      return failureState(state, 'solicitacao', action.error);
    case `${TRANSITION_SOLICITACAO}_PENDING`:
      return requestState(state, 'transition', true);
    case `${TRANSITION_SOLICITACAO}_SUCCESS`:
      return successState(state, 'transition', action.result);
    case `${TRANSITION_SOLICITACAO}_FAIL`:
      return failureState(state, 'transition', action.error);
    case `${LOAD_VIAGENS}_PENDING`:
      return requestState(state, 'viagens', true);
    case `${LOAD_VIAGENS}_SUCCESS`:
      return successState(state, 'viagens', action.result?.items || []);
    case `${LOAD_VIAGENS}_FAIL`:
      return failureState(state, 'viagens', action.error);
    case `${UPDATE_VIAGEM}_PENDING`:
      return requestState(state, 'viagem', true);
    case `${UPDATE_VIAGEM}_SUCCESS`:
      return successState(state, 'viagem', action.result);
    case `${UPDATE_VIAGEM}_FAIL`:
      return failureState(state, 'viagem', action.error);
    case `${LOAD_ABASTECIMENTOS}_PENDING`:
      return requestState(state, 'abastecimentos', true);
    case `${LOAD_ABASTECIMENTOS}_SUCCESS`:
      return successState(state, 'abastecimentos', action.result?.items || []);
    case `${LOAD_ABASTECIMENTOS}_FAIL`:
      return failureState(state, 'abastecimentos', action.error);
    case `${CREATE_ABASTECIMENTO}_PENDING`:
      return requestState(state, 'abastecimento', true);
    case `${CREATE_ABASTECIMENTO}_SUCCESS`:
      return successState(state, 'abastecimento', action.result);
    case `${CREATE_ABASTECIMENTO}_FAIL`:
      return failureState(state, 'abastecimento', action.error);
    default:
      return state;
  }
}
