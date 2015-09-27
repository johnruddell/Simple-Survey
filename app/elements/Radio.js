'use strict';
import React from '../lib/react';

export class RadioElement extends React.Component {
    constructor (props){
        super(props);
        this.state = {};
    }
    render () {
        var rows = []
        for(var i = 0; i < this.props.answers.length; i++){
            rows.push(<RadioElementRow answer={this.props.answers[i]} key={i} />)
        }
        return (
            <table>
                <thead>
                    <tr>
                        <th>Answer</th>
                        <th>Strongly Agree</th>
                        <th>Agree</th>
                        <th>Neutral</th>
                        <th>Disagree</th>
                        <th>Strongly Disagree</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export class RadioElementRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <tr>
                <td>{this.props.answer}</td>
                <td><input type="radio" /></td>
                <td><input type="radio" /></td>
                <td><input type="radio" /></td>
                <td><input type="radio" /></td>
                <td><input type="radio" /></td>
            </tr>
        )
    }
}