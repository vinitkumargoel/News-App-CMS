import update from 'immutability-helper';
import { configDataActions } from '../../actions/actionTypes/index';


const initialState = {
    ScrumMaster: {
        showPublish: false,
    }
}

export function configDataReducer(state = initialState, action) {
    switch (action.type) {
        case configDataActions.SET_PUBLISH:
        console.log(state);
            return update(state, {
                ScrumMaster: {
                    showPublish: { $set: action.payload.showPublish },
                // },
                // poker: {
                //     from: { $set: action.payload.from }
                // }
            }});
        default:
            return state;
    }
}

