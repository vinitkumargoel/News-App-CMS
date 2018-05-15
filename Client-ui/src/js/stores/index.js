import { storeHelper } from '../helpers/index';
import spokerStore from './spokerStore';

let initState = {
    welcome:{
        status:"initialized",
        isFirstVisit: true,
    },
    poker: spokerStore
};

let store = storeHelper.configureStore(initState);


export default store;