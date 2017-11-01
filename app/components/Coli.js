import React from 'react';
import Thinking from './Thinking';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/FlatButton';
import ColiIntro from 'material-ui/Card/CardHeader'
import Comparison from './Comparison';
import ProductsTable from './ProductsTable';
import summary from './../coli_data/coli_summary.csv'

export default class Coli extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: this.props.language.es,
            thinking: 'from-pr',
            salary: 50000,
            index: this.props.index,
            city: null,
            pr: '72-41980-700'
        }
        console.log(this.props.index);
        this.handleThinkingChange = this.handleThinkingChange.bind(this);
        this.handleLanguageButton = this.handleLanguageButton.bind(this);
        this.getProductTableData = this.getProductTableData.bind(this);
    }

    // This handler is passed to the Thinking Component as onThinkingChange
    handleThinkingChange(value) {
        this.setState(value);
    }
    handleLanguageButton() {
        console.log("LanguageChange");
        this.setState({
            language: (this.state.language.code == "en") ?
                this.props.language.es : this.props.language.en
        });
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

    getHeaderNames(from, to, resources) {
        console.log(resources.table);
        var header = [resources.table.headers[0], from.replace(/([a-z A-z]*) ([A-Z]{2})/g, '$1, $2'), to.replace(/([a-z A-z]*) ([A-Z]{2})/g, '$1, $2'), resources.table.headers[1] ];
        return header;
    }

    getProductTableData(from, to, resources) {
        var fromData = [], toData = [];
        for (var i = 1; i < this.props.averagePrices.length; i++) {
            if (from[0] == this.props.averagePrices[i][0]) {
                fromData = this.props.averagePrices[i];
            }
            if (to[0] == this.props.averagePrices[i][0]) {
                toData = this.props.averagePrices[i];
            }
        }
        var header = this.getHeaderNames(fromData[3], toData[3], resources);
        var products = [];
        for (var i = 0; i < summary[0].length; i++) {
            products[i] = [
                resources.table.products[i],
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
        let resources = this.state.language.code == "en" ?
            this.props.resources.en : this.props.resources.es;
        let prodTable = null, comparison = null;
        let fromCity = this.getFromCity();
        let toCity = this.getToCity();
        if (fromCity && toCity) {
            prodTable = (
                <ProductsTable data={this.getProductTableData(fromCity, toCity, resources)} />
            );
            comparison = (
                <Comparison className={'rightContainer'}
                    salary={this.state.salary}
                    fromCity={fromCity}
                    toCity={toCity}
                    resources={resources.comparison}
                />
            )
        }

        return (
            <div className={'container'}>
                <Button label={"English | Espanol"} primary={true} fullWidth={true}
                    onClick={this.handleLanguageButton} />

                <Paper zDepth={0}><h5 style={{ whiteSpace: "pre-line" }}>{resources.intro}</h5></Paper>
                <Thinking className={'leftContainer'}
                    onChange={this.handleThinkingChange}
                    thinking={this.state.thinking}
                    locations={this.state.index}
                    resources={resources} />

                {comparison}
                <Paper className={'productsContainer'}>
                    {prodTable}
                </Paper>
            </div>
        );
    }
}
