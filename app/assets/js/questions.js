import React from '../../lib/react';
import {RadioElement} from '../../elements/Radio';
import {CheckBoxElement} from '../../elements/CheckBox';
import {DropDownElement} from '../../elements/DropDown';
import {PlainTextElement} from '../../elements/PlainText';


export class Question {
    constructor(question) {
        this._question = question;
        this._correctAnswer = '';
    }
    get question() {
        return this._question;
    }
    set question(value) {
        if(!value){
            return;
        }
        this._question = value;
    }
    //TODO: add correct answer to the build steps of a question
    get correctAnswer() {
        return this._correctAnswer;
    }
    set correctAnswer(value) {
        if(!value){
            return;
        }
        this._correctAnswer = value;
    }
    
};

export class Answer {
    constructor(multipleAnswers) {
        this._answers = [];
        this._html = null;
        this._multipleAnswers = multipleAnswers;
    }

    get answers() {
        return this._answers;
    }

    get html(){
        return this._html;
    }

    get multipleAnswers(){
        return this._multipleAnswers;
    }

    set html(html){
        this._html = html;
    }

    render(){
        return this._html;
    }
}

export class Radio extends Answer {
    constructor(){
        super(true)
    }
    addAnswer(answer){
        this._answers.push(answer)
    }
    render(){
        this._html = <RadioElement answers={this._answers} />
        return super.render()
    }
}
export class CheckBox extends Answer {
    constructor(){
        super(true)
    }
    addAnswer(answer){
        this._answers.push(answer)
    }
    render(){
        this._html = <CheckBoxElement answers={this._answers} />
        return super.render()
    }
}

export class DropDown extends Answer {
    constructor(){
        super(true)
    }
    addAnswer(answer){
        this._answers.push(answer)
    }
    render(){
        this._html = <DropDownElement answers={this._answers} />
        return super.render()
    }
}
export class PlainText extends Answer {
    constructor(){
        super(false)
    }
    addAnswer(answer){
        this._answers.push(answer)
    }
    render(){
        this._html = <PlainTextElement />
        return super.render()
    }
}
