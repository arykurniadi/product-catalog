import { client } from './';

export function fetchProducts() {
  return dispatch => {
    return dispatch({
      type: 'FETCH_PRODUCTS',
      payload: client.get('/todos')
    })
  }
}

export function updateCarts(qty) {
  // console.log('--> updateCarts');
  // console.log('--> qty = ', qty);

  return dispatch => {
    return dispatch({
      type: 'UPDATE_CART',
      payload: {qty: qty}
    })
  }
}
