'use strict';
import React from '../lib/react';
import $ from 'jquery/jquery:dist/jquery';
import {Question, Answer, Radio, CheckBox, DropDown, PlainText} from '../assets/js/questions';
import {homeActions as actions} from '../actions/homeActions';

export class AddQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {newQuestion: false};
        this.currentQuestion = new Question();
        this.currentAnswer = new Answer();
        this.answerTypes = {
            radio: Radio,
            checkBox: CheckBox,
            dropDown: DropDown,
            plainText: PlainText
        }

        this.addQuestion = this.addQuestion.bind(this);
        this.setInputData = this.setInputData.bind(this);
        this.addAnswer = this.addAnswer.bind(this);
        this.onQuestionTypeSelected = this.onQuestionTypeSelected.bind(this);
        this._createMarkup = this._createMarkup.bind(this);
        this.saveQuestionToStore = this.saveQuestionToStore.bind(this);
    }
    setInputData(e){
        this.state[e.target.name] = e.target.value;
        this.setState(this.state);
    }
    addQuestion(e) {
        e.preventDefault();
        this.currentQuestion.question = this.state.newQuestionValue;
        this.setState({chooseType: true});
    }
    addAnswer(e) {
        e.preventDefault();
        this.currentAnswer.addAnswer(this.state.newAnswerValue);
        this.setState({newAnswerValue: ''});
    }
    onQuestionTypeSelected(e){
        var option = $('option:selected', e.target);
        var data = option.data('function');
        this.currentAnswer = new this.answerTypes[data.funcType]();
        if(this.currentAnswer.multipleAnswers){
            this.setState({addAnswer: true});
        } else {
            this.setState({addAnswer: false, saveWithNoAnswer: true});
        }
    }
    _createMarkup(){
        return {__html: this.currentAnswer.render() };
    }
    saveQuestionToStore(){
        actions.questionAdded({title:this.currentQuestion.question, answers: this.currentAnswer.render()})
    }
    render() {
        var self = this;
        return (
            <div>
                <div className="row">
                    {this.props.newQuestion ?
                        <div className="six columns">
                            <p>What question would you like to ask?</p>
                            <form>
                                <input type="text" value={this.state.newQuestionValue} name="newQuestionValue" onChange={this.setInputData} />
                                <button onClick={this.addQuestion}>Add</button>
                            </form>
                        </div>
                    : null
                    }
                    {this.props.newQuestion && this.state.chooseType ?
                        <div className="six columns">
                            <p>Choose an answer type</p>
                            <select onChange={this.onQuestionTypeSelected} defaultValue="0">
                                <option value="0" disabled>CHOOSE ONE</option>
                                <option data-function='{"funcType": "radio"}'>Radio</option>
                                <option data-function='{"funcType": "checkBox"}'>Check Box</option>
                                <option data-function='{"funcType": "dropDown"}'>DropDown</option>
                                <option data-function='{"funcType": "plainText"}'>Plain Text</option>
                            </select>
                        </div>
                        : null
                    }
                </div>
                <div className="row">
                    {this.currentAnswer.answers.length > 0 ? 
                        <div className="twelve columns">
                            <p>Preview:</p>
                            <h5>{this.currentQuestion.question}</h5>
                            <div>{this.currentAnswer.render()}</div>
                            <div className="row">
                                <form className="six columns">
                                    <input type="text" value={this.state.newAnswerValue} name="newAnswerValue" onChange={this.setInputData} />
                                    <button onClick={this.addAnswer}>Add</button>
                                </form>
                                <div className="six columns">
                                    <button className="button-primary u-pull-right" onClick={this.saveQuestionToStore}>Save Question</button>
                                </div>
                            </div>
                        </div>
                    : this.props.newQuestion && this.state.addAnswer ?
                        <div className="twelve columns">
                        <p>Add an answer to your question.</p>
                            <form>
                                <input type="text" value={this.state.newAnswerValue} name="newAnswerValue" onChange={this.setInputData} />
                                <button onClick={this.addAnswer}>Add Answer</button>
                            </form>
                        </div>
                    : null
                    }
                    {this.state.saveWithNoAnswer ? 
                        <div className="twelve columns">
                            <p>Preview:</p>
                            <h5>{this.currentQuestion.question}</h5>
                            <div>{this.currentAnswer.render()}</div>
                            <button className="button-primary u-pull-right" onClick={this.saveQuestionToStore}>Save Question</button>
                        </div>
                        : null
                    }
                    
                </div>
            </div>
        );
    }
};
AddQuestion.title = 'Add a Question';