import { createStore, compose, applyMiddleware } from "redux";
import combineReducers from './content'
import thunk from "redux-thunk"

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initStore = createStore(
    combineReducers,
    composeEnhancers(applyMiddleware(thunk))
) 

export default initStore;