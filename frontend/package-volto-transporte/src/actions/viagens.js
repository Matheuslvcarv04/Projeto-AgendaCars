export const LOAD_VIAGENS = 'transporte/LOAD_VIAGENS';

export function loadViagens(data) {
  return {
    type: LOAD_VIAGENS,
    request: {
      op: 'get',
      path: `@search?portal_type=Viagem&sort_on=horario&sort_order=ascending&${
        data ? `horario=${encodeURIComponent(data)}` : ''
      }`,
    },
  };
}
