import reducers from '../reducers';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import wsHelper from './websocketHelper';

export default {
    configureStore : function(initState){
         let store = createStore(reducers,initState,applyMiddleware(thunkMiddleware));
         wsHelper.init(store);
         return store;
    },
}