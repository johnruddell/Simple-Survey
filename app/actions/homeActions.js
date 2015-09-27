import {dispatcher} from '../dispatcher/GlobalDispatcher';
import {HOME_C as C} from '../constants/Constants';

export const homeActions = {
    questionAdded: function(payload){
        dispatcher.dispatch(C.QUESTION_ADDED, payload);
    }
};