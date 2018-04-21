import reducers from '../reducers';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware,compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore(initState){
    return createStore(reducers,initState,composeEnhancers(applyMiddleware(thunkMiddleware)));
}