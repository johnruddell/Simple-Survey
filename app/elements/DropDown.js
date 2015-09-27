'use strict';
import React from '../lib/react';

export class DropDownElement extends React.Component {
    constructor (props){
        super(props);
        this.state = {};
    }
    render () {
        var options = []
        for(var i = 0; i < this.props.answers.length; i++){
            options.push(<DropDownElementRow answer={this.props.answers[i]} key={i} />)
        }
        return <select>{options}</select>
    }
}

export class DropDownElementRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return <option>{this.props.answer}</option>
    }
}