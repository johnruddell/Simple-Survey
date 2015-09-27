'use strict';
import React from '../lib/react';
import {Layout} from './_layout';
import {AddQuestion} from './add-question';
import {homeStore as store} from '../stores/homeStore';


export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = store.getData();

        this.storeChanged = this.storeChanged.bind(this);
        this.showQuestion = this.showQuestion.bind(this);
        store.addChangeListener(this.storeChanged);
    }
    storeChanged(){
        this.setState(store.getData());
    }
    componentWillUnmount() {
        store.removeChangeListener(this.storeChanged);
    }
    showQuestion(){
        this.setState({addQuestion: false, newQuestion: true})
    }
    _createMarkup(markup){
        console.log('here');
        return {__html: markup };
    }
    render() {
        var self = this;
        return (
            <section className="container">
                <div className="row">
                    <h2 className="twelve columns">Survey System</h2>
                    {this.state.addQuestion ?
                        <div className="twelve columns">
                            <button onClick={this.showQuestion}>Add Question</button>
                        </div>
                        : null
                    }
                </div>
                {this.state.newQuestion ? <AddQuestion newQuestion={this.state.newQuestion} /> : null }
                {this.state.addQuestion && this.state.questions.length ? 
                    this.state.questions.map(function(arr, i){
                        return(
                            <div className="row" key={i}>
                                <h5 className="twelve columns">{i+1}. {arr.title}</h5>
                                <div>{arr.answers}</div>
                            </div>
                        )
                    })
                : null}
            </section>
        );
    }
};
Home.title = 'Survey System';