import React from 'react';
import ThinkingRadioGroup from './thinking_components/RadioGroup';
import ColiSelection from './ColiSelection';
import Comparison from './Comparison';
import SalarySlider from './thinking_components/SalarySlider';
import Paper from 'material-ui/Paper';

export default class Thinking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thinking: props.thinking,
            states: this.getStates(),
            cities: this.getCities(),
            selectedState: '',
            city: null
        };
        this.handleSelection = this.handleSelection.bind(this);
        this.getCitiesForState = this.getCitiesForState.bind(this);
    }

    handleSelection(value) {
        console.log(value);
        this.setState(value);
        this.props.onChange( value );
    }

    getStates() {
        var options = [];
        options[options.length] = { value: options.length, label: this.props.locations[0][1] };
        for (var i = 1; i < this.props.locations.length; i++) {
            if (this.props.locations[i][1] != this.props.locations[i - 1][1]) {
                options[options.length] = { value: options.length, label: this.props.locations[i][1] };
            }
        }
        console.log(options);
        return options;
    }

    getCities() {
        var cities = [];
        for (var i = 0; i < this.props.locations.length; i++) {
            cities[i] = {
                value: this.props.locations[i][0],
                state: this.props.locations[i][1],
                label: this.props.locations[i][3]
            };
            //console.log(options[i]);
        }
        return cities;
    }

    getCitiesForState(value) {
        if (value) {
            var cities = [];
            for (var i = 0; i < this.state.cities.length; i++) {
                if (this.state.cities[i].state == value) {
                    cities[cities.length] = {
                        value: cities.length,
                        rowId: this.state.cities[i].value,
                        label: this.state.cities[i].label
                    };
                }
            }
            return cities;
        }
        return this.state.cities;
    }

    render() {
        return (
            <Paper className={this.props.className}>
                <ColiSelection onChange={this.handleSelection}
                    states={this.state.states}
                    cities={this.getCitiesForState(this.state.selectedState.label)}
                />
            </Paper>
        );
    }
}