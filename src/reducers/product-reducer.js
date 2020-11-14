const defaultState = {
    products: [],
    product: {name:{}},
    loading: false,
    isLoadingSubmit: false,
    carts: [],
    errors: {}
}

export default (state=defaultState, action={}) => {  
  console.log("--> reducer");
  console.log("action = ", action)
  console.log("=====================================");

  switch (action.type) {
    case 'FETCH_PRODUCTS': {
      return {
        ...state,
        products: action.payload.data
      }
    }

    case 'FETCH_PRODUCTS_PENDING': {
      return {
        ...state,
        loading: true,
        products: []
      }
    }  

    case 'FETCH_PRODUCTS_FULFILLED': {
      return {
        ...state,
        products: action.payload.data,
        errors: {},
        loading: false
      }
    }  

    case 'UPDATE_CART': {
      return {
        ...state,
        carts: action.payload
      }
    }    


    default:
      return state;
  }
}