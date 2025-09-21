import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import clientReducer from '../reducers/clientReducers';
import productReducer from '../reducers/productReducer';
import shoppingCartReducer from '../reducers/shoppingCartReducer';

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
