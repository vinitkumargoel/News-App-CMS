import { storeHelper } from '../helpers/index';
import spokerStore from './spokerStore';
import {loadState} from '../../localStorage'

let initState = {
    welcome:{
        status:"initialized",
        isFirstVisit: true,
    },
    poker: spokerStore
};
let persistedState = undefined; //loadState();
let state = persistedState !== undefined ? persistedState:initState;
let store = storeHelper.configureStore(state);


export default store;