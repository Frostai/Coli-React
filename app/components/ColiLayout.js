import React from 'react';
import Thinking from './Thinking';
import Comparison from './Comparison';
import ProductsTable from './ProductsTable';
//
export default class ColiLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            thinking: 'thinking-from-pr',
            comparison: [],
            products: []
        };
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
                    thinking={this.state.thinking} />
                <Comparison data={this.state.comparison}/>
                <ProductsTable products={this.state.products}/>

            </div>
        );
    }
    
}

