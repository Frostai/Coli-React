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
            salary: 50000,
            selectedState: '',
            fromCity: '',
            toCity: '',
            pr: '72-41980-700'
        };
        this.handleSelection = this.handleSelection.bind(this);
        this.getCitiesForState = this.getCitiesForState.bind(this);
        this.getCityForId = this.getCityForId.bind(this);
    }

    handleSelection(value) {
        console.log('handleSelection');
        if (value.city) {
            value.fromCity = (value.thinking == 'from-pr' ? this.state.pr : value.city);
            value.toCity = (value.thinking == 'from-pr' ? value.city : this.state.pr);
        }
        this.setState(value);
        console.log(value);
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

    getCityForId(value) {
        for (var i = 0; i < this.props.locations.length; i++) {
            if (this.props.locations[i][0] == value) {
                console.log('City: ' + this.props.locations[i]);
                return this.props.locations[i];
            }
        }
    }

    render() {
        return (
            <div className={'container'}>
                <Paper className={'leftContainer'}>
                    <ColiSelection onChange={this.handleSelection}
                        states={this.state.states}
                        cities={this.getCitiesForState(this.state.selectedState.label)}
                    />
                </Paper>
                <Comparison salary={this.state.salary}
                    fromCity={this.getCityForId(this.state.fromCity)}
                    toCity={this.getCityForId(this.state.toCity)}
                />
            </div>
        );
    }
}


/*
    getCityForId(value) {
        for (var i = 0; i < this.props.locations.length; i++) {
            if (this.props.locations[i][0] == value) {
                console.log(this.props.locations[i]);
                return this.props.locations[i];
            }
        }
    }

    getCitiesForState(value) {
        var cities = [];
        for (var i = 0; i < this.props.cities.length; i++) {
            if (this.props.cities[i].state == this.props.states[value].label) {
                console.log(this.props.cities[i].value + '==' + this.props.states[value].label);
                cities[cities.length] = { value: cities.length, rowId: this.props.cities[i].value, label: this.props.cities[i].label };
            }
        }
        return cities;
    }
*/