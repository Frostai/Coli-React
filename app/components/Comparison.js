import React from 'react';
import { Bar } from 'react-chartjs-2';
import Paper from 'material-ui/Paper';

export default class Comparison extends React.Component {
    constructor(props) {
        super(props);
        this.calculateComparableSalary = this.calculateComparableSalary.bind(this);
        this.prepareChartData = this.prepareChartData.bind(this);
    }


    // Salary + ( (compositeIndexFromCity - compositeIndexToCity) / compositeIndexFromCity) * Salary
    calculateComparableSalary(salary) {
        if (this.props.fromCity && this.props.toCity) {
            var value = salary
                + ((this.props.toCity[4] - this.props.fromCity[4]) / this.props.fromCity[4])
                * salary;
            console.log('Calc: ' + ((this.props.fromCity[4] - this.props.toCity[4]) / this.props.fromCity[4]));
            console.log('Comparable salary: ' + value);
            return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
        }
        return salary.toLocaleString(undefined, { maximumFractionDigits: 2 });
    }

    prepareChartData(fromCity, toCity) {
        if (!(fromCity && toCity)) return [];

        return {
            labels: ['Composite', 'Grocery', 'Housing', 'Utilities',
                'Transportation', 'Health', 'Miscellaneous'],
            datasets: [
                {
                    label: fromCity[3],
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [fromCity[4], fromCity[5], fromCity[6], fromCity[7], fromCity[8], fromCity[9], fromCity[10]]
                },
                {
                    label: toCity[3],
                    backgroundColor: 'rgba(99,99,255,0.2)',
                    borderColor: 'rgba(99,99,255,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(99,99,255,0.4)',
                    hoverBorderColor: 'rgba(99,99,255,1)',
                    data: [toCity[4], toCity[5], toCity[6], toCity[7], toCity[8], toCity[9], toCity[10]]
                }
            ]
        };
    }

    render() {
        let bar = null;
        if (this.props.fromCity && this.props.toCity) {
            bar = <Bar data={this.prepareChartData(this.props.fromCity, this.props.toCity)}
                width={100} height={80} redraw={true} />
        };
        return (
            <Paper className={'rightContainer'}>
                <h3>Salario comparable / Comparable Salary</h3>
                <h3>$ {this.calculateComparableSalary(this.props.salary)}</h3>
                <div className={'chartContainer'}>{bar} </div>
            </Paper>
        );
    }
}

