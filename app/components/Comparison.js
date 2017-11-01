import React from 'react';
import { Bar } from 'react-chartjs-2';
import Paper from 'material-ui/Paper';

export default class Comparison extends React.Component {
    constructor(props) {
        super(props);
        this.calculateComparableSalary = this.calculateComparableSalary.bind(this);
        this.prepareChartData = this.prepareChartData.bind(this);
        this.prepareComparisonData = this.prepareComparisonData.bind(this);
    }


    // Salary + ( (compositeIndexFromCity - compositeIndexToCity) / compositeIndexFromCity) * Salary
    calculateComparableSalary(salary) {
        if (this.props.fromCity && this.props.toCity) {
            var value = salary
                + ((this.props.toCity[4] - this.props.fromCity[4]) / this.props.fromCity[4])
                * salary;
            console.log('Calc: ' + ((this.props.fromCity[4] - this.props.toCity[4]) / this.props.fromCity[4]));
            console.log('Comparable salary: ' + value);
            return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
        }
        return salary.toLocaleString(undefined, { maximumFractionDigits: 0 });
    }

    // calculate more/less formula
    // ABS((to-from)/from)
    // to - from < 0 then less, else more 

    prepareChartData(fromCity, toCity) {
        if (!(fromCity && toCity)) return [];

        return {
            labels: this.props.resources.labels,
            datasets: [
                {
                    label: fromCity[3].replace(/([a-z A-z]*) ([A-Z]{2})/g, '$1, $2'),
                    backgroundColor: 'rgba(52,13,159,0.2)',
                    borderColor: 'rgba(52,13,159,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(52,13,159,0.4)',
                    hoverBorderColor: 'rgba(52,13,159,1)',
                    data: [fromCity[5], fromCity[6], fromCity[7], fromCity[8], fromCity[9], fromCity[10],0]
                },
                {
                    label: toCity[3].replace(/([a-z A-z]*) ([A-Z]{2})/g, '$1, $2'),
                    backgroundColor: 'rgba(155,195,55,0.2)',
                    borderColor: 'rgba(155,195,55,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(155,195,55,0.4)',
                    hoverBorderColor: 'rgba(155,195,55,1)',
                    data: [toCity[5], toCity[6], toCity[7], toCity[8], toCity[9], toCity[10],0]
                }
            ]
        };
    }

    prepareComparisonData(fromCity, toCity) {
        var comparisons = [];
        for(var i = 5; i <= 10; i++) {
            comparisons[comparisons.length] = this.formatCompData(i, fromCity[i], toCity[i], this.props.resources.labels[i-5]);
        }
        return comparisons;
    }
    formatCompData(key, fromCity, toCity, labelText) {
        var result = Math.abs( (toCity - fromCity) / fromCity )* 100;
        var isMoreOrLess = (toCity - fromCity) < 0;
        var moreOrLess = isMoreOrLess ? this.props.resources.lessText : this.props.resources.moreText;
        var label = labelText + ': ';
        return (
            <div key={key} className={'comparisonCategoriesContainer'}>
            <span className={'comparisonCategories'} >{label}</span> 
            <span className={moreOrLess} >{ result.toLocaleString(undefined, { maximumFractionDigits: 0 }) + '% '}</span>
            <span className={moreOrLess} >{moreOrLess}</span>
            </div>
        );
    }

    render() {
        let bar = null;
        if (this.props.fromCity && this.props.toCity) {
            bar = <Bar data={this.prepareChartData(this.props.fromCity, this.props.toCity)}
                height={300} options={{
                    maintainAspectRatio: false
                }} redraw={true} />
        };
        return (
            <Paper className={'rightContainer'}>
                <h4>{this.props.resources.salary}${this.calculateComparableSalary(this.props.salary)}</h4>
                <div className={'chartContainer'}>{bar} </div>
                { this.prepareComparisonData(this.props.fromCity, this.props.toCity) }
                
            </Paper>
        );
    }
}

