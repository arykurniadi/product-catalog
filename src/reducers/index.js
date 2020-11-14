import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ProductReducer from './product-reducer';

const reducers = {
  productStore: ProductReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;