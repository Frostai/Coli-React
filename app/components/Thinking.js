import React from 'react';
import ThinkingRadioGroup from './thinking_components/RadioGroup';
import LocationSelect from './LocationSelectField';
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
            fromCity: '',
            toCity: '',
            pr: '72-41980-700'
        };
        this.handleThinkingChange = this.handleThinkingChange.bind(this);
        this.handleSelectedCity = this.handleSelectedCity.bind(this);
        this.handleSalaryChange = this.handleSalaryChange.bind(this);
        this.getCityForId = this.getCityForId.bind(this);
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

    handleThinkingChange(e) {
        console.log(e);
        this.setState( {
            thinking: e,
            fromCity: this.getCityForId( e == 'from-pr' ? this.state.pr : this.state.selectedCity),
            toCity: this.getCityForId( e == 'from-pr' ?  this.state.selectedCity : this.state.pr)
        });
    }
    handleSelectedCity(selected) {
        this.setState({
            selectedCity: selected,
            fromCity: this.getCityForId(this.state.thinking == 'from-pr' ? this.state.pr : selected),
            toCity: this.getCityForId(this.state.thinking == 'from-pr' ?  selected : this.state.pr)
        });
        console.log('Thinking HandleSelectedCity: ' + this.state.thinking);        
        console.log('Selected CityID: ' + selected);
        console.log('From CityID: ' + this.state.fromCity);
        console.log('To CityID: ' + this.state.toCity);
    }

    handleSalaryChange(value) {
        this.setState({ 
            salary: value
        });
        console.log('ThinkingSalary: $' + value);
    }

    getCityForId(value) {
        for (var i = 0; i < this.props.locations.length; i++) {
            if (this.props.locations[i][0] == value) {
                console.log(this.props.locations[i]);
                return this.props.locations[i];
            }
        }
    }

    render() {
        return (
            <div className={'container'}>
                <Paper className={'leftContainer'}> 
                <ThinkingRadioGroup onChange={this.handleThinkingChange} default={this.state.thinking}/>
                <LocationSelect onSelectedCity={this.handleSelectedCity}
                    states={this.state.states}
                    cities={this.state.cities} />
                <SalarySlider onChange={this.handleSalaryChange}
                    min={20000} max={250000} step={5000} defaultSalary={50000}
                />
                </Paper>
                <Comparison salary={this.state.salary}
                    fromCity={this.state.fromCity}
                    toCity={this.state.toCity}
                />
            </div>
        );
    }
}
