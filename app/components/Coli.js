import React from 'react';
import Thinking from './Thinking';
import Comparison from './Comparison';
import ProductsTable from './ProductsTable';

export default class Coli extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thinking: 'from-pr',
            index: this.props.index,
            averagePrices: this.props.averagePrices
        }
        console.log(this.props.index);
        this.handleThinkingChange = this.handleThinkingChange.bind(this);
    }

    // This handler is passed to the Thinking Component as onThinkingChange
    handleThinkingChange(e) {
        console.log(e);
        // Sets the local state with the value sent from Thinking Component
        this.setState({ thinking: e });
    }

    render() {
        return (
            <div>
                <Thinking onThinkingChange={this.handleThinkingChange}
                    thinking={this.state.thinking} locations={this.state.index} />
                <ProductsTable products={this.state.averagePrices} />
            </div>
        );
    }
}
