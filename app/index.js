import React from 'react';
import ReactDOM from 'react-dom';
import Coli from './components/Coli';
import css from './styles/coli.css';
import ColiIndex from 'csv-loader!./coli_data/coli_index.csv';
import ColiAveragePrices from 'csv-loader!./coli_data/coli_average_prices.csv';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

console.log(ColiIndex);
ReactDOM.render(
    <MuiThemeProvider>
    <Coli index={ColiIndex} averagePrices={ColiAveragePrices} />
    </MuiThemeProvider>,
    document.getElementById('app')
);