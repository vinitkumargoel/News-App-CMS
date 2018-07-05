import { storeHelper } from '../helpers/index';
import spokerStore from './spokerStore';

let initState = {
    poker: spokerStore
};

let store = storeHelper.configureStore(initState);


export default store;