export const UPDATE_VIAGEM = 'transporte/UPDATE_VIAGEM';

export function updateViagem(url, data) {
  return {
    type: UPDATE_VIAGEM,
    request: {
      op: 'patch',
      path: url,
      data,
    },
  };
}
