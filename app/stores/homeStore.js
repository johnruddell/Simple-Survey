'use strict';
import {HOME_C as C} from '../constants/Constants';
import {dispatcher} from '../dispatcher/GlobalDispatcher';
import {Store} from './Store';

export const homeStore = new Store({
    questions: [],
    addQuestion: true, 
    newQuestion: false,
    getData: function(){
        return {
           questions: this.questions,
           addQuestion: this.addQuestion,
           newQuestion: this.newQuestion
        };
    }
});

dispatcher.register(C.QUESTION_ADDED, function(payload) {
    homeStore.questions.push(payload);
    homeStore.change();
});