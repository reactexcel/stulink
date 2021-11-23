import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import  { watcherSaga } from "./saga/rootSaga";
import rootReducer from "./reducer/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
// we need an initialState otherwise , store will freak out
const initialState = {};

const sagaMiddleware = createSagaMiddleware();

// redux sagas is a middleware that we apply to the store
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
  applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watcherSaga);

export default store;