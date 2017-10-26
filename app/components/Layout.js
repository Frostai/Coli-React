import React from 'react';
import Thinking from './Thinking';
//
export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { thinking: 'thinking-from-pr'};
    }
    // This handler is passed to the Thinking Component as onThinkingChange
    handleThinkingChange(e) {
        console.log(e);
        // Sets the local state with the value sent from Thinking Component
        this.setState( { thinking: e } );
    }

    render() {
        return (
            <div>
                <Thinking onThinkingChange={this.handleThinkingChange.bind(this)} 
                thinking={this.state.thinking} />
                <h1> {this.state.thinking} </h1>
                <h1> {this.state.thinking} </h1>

            </div>
        );
    }
    
}

