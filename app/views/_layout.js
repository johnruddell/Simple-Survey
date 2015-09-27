'use strict';
import React from '../lib/react';

export class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{paddingTop: '3.125rem'}}>
                {this.props.children}
            </div>
        );
    }
};
