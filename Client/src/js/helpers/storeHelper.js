import reducers from '../reducers';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware ,compose} from 'redux';
import wsHelper from './websocketHelper';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default {
    configureStore : function(initState){
         let store = createStore(reducers,initState,composeEnhancers(applyMiddleware(thunkMiddleware)));
         wsHelper.init();
         wsHelper.startListenToStore(store);
         return store;
    },
}