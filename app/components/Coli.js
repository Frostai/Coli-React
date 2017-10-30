import React from 'react';
import Thinking from './Thinking';
import Paper from 'material-ui/Paper';
import Comparison from './Comparison';
import ProductsTable from './ProductsTable';
import summary from 'csv-loader!./../coli_data/coli_summary.csv'

export default class Coli extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thinking: 'from-pr',
            salary: 50000,
            index: this.props.index,
            city: null,
            pr: '72-41980-700'
        }
        console.log(this.props.index);
        this.handleThinkingChange = this.handleThinkingChange.bind(this);
        this.getProductTableData = this.getProductTableData.bind(this);
    }

    // This handler is passed to the Thinking Component as onThinkingChange
    handleThinkingChange(value) {
        console.log('Coli:');
        console.log(value);
        this.setState(value);
    }

    getFromCity() {
        var from = this.getCityForId(this.state.thinking == 'from-pr' ? this.state.pr : this.state.city);
        return from;
    }
    getToCity() {
        var to = this.getCityForId(this.state.thinking == 'from-pr' ? this.state.city : this.state.pr);
        return to;
    }
    getCityForId(value) {
        for (var i = 0; i < this.props.index.length; i++) {
            if (this.props.index[i][0] == value) {
                console.log('City: ' + this.props.index[i]);
                return this.props.index[i];
            }
        }
    }

    getHeaderNames(from, to) {
        var header = ['Productos y servicios', from, to, 'Estados Unidos'];
        return header;
    }

    getProductTableData(from, to) {
        var fromData = [], toData = [];
        for (var i = 1; i < this.props.averagePrices.length; i++) {
            if (from[0] == this.props.averagePrices[i][0]) {
                fromData = this.props.averagePrices[i];
            }
            if (to[0] == this.props.averagePrices[i][0]) {
                toData = this.props.averagePrices[i];
            }
        }
        var header = this.getHeaderNames(fromData[3], toData[3]);
        var products = [];
        for (var i = 0; i < summary[0].length; i++) {
            products[i] = [
                summary[0][i],
                fromData[i + 4],
                toData[i + 4],
                summary[1][i]
            ];
        }
        console.log(products);
        return {
            header: header,
            products: products
        };
    }

    getProductNames() {
        var products = this.props.averagePrices[0].slice(4, );
        console.log(products);
        return products;
    }

    render() {
        let prodTable = null, comparison = null;
        let fromCity = this.getFromCity();
        let toCity = this.getToCity();
        if (fromCity && toCity) {
            prodTable = (<ProductsTable data={this.getProductTableData(fromCity, toCity)} />
            );
            comparison = (
                <Comparison className={'rightContainer'}
                    salary={this.state.salary}
                    fromCity={fromCity}
                    toCity={toCity}
                />
            )
        }

        return (
            <div className={'container'}>
                <Thinking className={'leftContainer'}
                    onChange={this.handleThinkingChange}
                    thinking={this.state.thinking}
                    locations={this.state.index} />

                {comparison}
                <Paper className={'productsContainer'}>
                    {prodTable}
                </Paper>
            </div>
        );
    }
}
