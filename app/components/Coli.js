import React from 'react';
import Thinking from './Thinking';
import Comparison from './Comparison';
import ProductsTable from './ProductsTable';

export default class Coli extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thinking: 'thinking-from-pr',            
            index : this.props.index,
            averagePrices : this.props.averagePrices
        }
        console.log(this.props.index);
    }

    // This handler is passed to the Thinking Component as onThinkingChange
    handleThinkingChange(e) {
        console.log(e);
        // Sets the local state with the value sent from Thinking Component
        this.setState( { thinking: e } );
    }

    calculate() {

    }

    render() {
        return (
            <div>
                <Thinking onThinkingChange={this.handleThinkingChange.bind(this)} 
                    thinking={this.state.thinking} locations={this.state.index}/>
                <Comparison data={this.state.comparison}/>
                <ProductsTable products={this.state.averagePrices}/>

            </div>
        );
    }
}
