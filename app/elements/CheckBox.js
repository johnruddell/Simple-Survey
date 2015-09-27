'use strict';
import React from '../lib/react';

export class CheckBoxElement extends React.Component {
    constructor (props){
        super(props);
        this.state = {};
    }
    render () {
        var rows = []
        for(var i = 0; i < this.props.answers.length; i++){
            rows.push(<CheckBoxElementRow answer={this.props.answers[i]} key={i} />)
        }
        return (
            <table>
                <thead>
                    <tr>
                        <th>Choose One</th>
                        <th>Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export class CheckBoxElementRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <tr>
                <td><input type="checkbox" /></td>
                <td>{this.props.answer}</td>
            </tr>
        )
    }
}