import reducers from '../reducers';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export default function configureStore(initState){
    return createStore(reducers,initState,applyMiddleware(thunkMiddleware));
}