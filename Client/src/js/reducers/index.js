import { combineReducers } from 'redux';
import { configDataReducer } from './configDataReducer';
import { wsPokerReducer } from './websocketReducers';
import { reactPokerReducer } from './reactReducers';

const pokerReducer = function (state = {}, action){
    return reactPokerReducer(state, action) || wsPokerReducer(state, action) || state;
}

export default combineReducers({
    poker: pokerReducer,
    configData: configDataReducer,
});