import React from 'react';

export default class Thinking extends React.Component {
    constructor(props) {
        super(props);
        this.state = { thinking: props.thinking };
        this.handleThinkingChange = this.handleThinkingChange.bind(this);
    }

    handleThinkingChange(e) {
        if (this.state.thinking === 'thinking-from-pr')
            this.setState({ thinking: 'thinking-to-pr' });
        else
            this.setState({ thinking: 'thinking-from-pr' });
        this.props.onThinkingChange(e.target.value);    
    }

    render() {
        return (
            <div  onChange={this.props.handleThinkingChange}>
                <input type="radio" name="thinking" id="thinking-from-pr"
                    value="thinking-from-pr"
                    checked={this.state.thinking === 'thinking-from-pr'}
                    onChange={this.handleThinkingChange}
                />
                <label htmlFor="thinking-from-pr">Estoy pensando mudarme desde Puerto Rico I am thinking of moving from Puerto Rico</label>

                <input type="radio" name="thinking" id="thinking-to-pr"
                    value="thinking-to-pr"
                    checked={this.state.thinking === 'thinking-to-pr'}
                    onChange={this.handleThinkingChange}
                />
                <label htmlFor="thinking-to-pr">Estoy pensando mudarme a Puerto Rico I am thinking of moving to Puerto Rico</label>
            </div>
        );
    }
}