'use strict';
import React from '../lib/react';

export class PlainTextElement extends React.Component {
    constructor (props){
        super(props);
        this.state = {};
    }
    render () {
        return <input type="text" />
    }
}