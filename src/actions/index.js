export const setProducto = (payload) => {
  return {
    type: 'SET_PRODUCTO',
    payload,
  };
};

export const setPrograma = (payload) => {
  return {
    type: 'SET_PROGRAMA',
    payload,
  };
};

export const setFechaHora = (payload) => {
  return {
    type: 'SET_FECHAHORA',
    payload,
  };
};
