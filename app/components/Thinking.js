import React from 'react';
import ThinkingRadioGroup from './thinking_components/RadioGroup';
import LocationSelect from './LocationSelectField';
import Comparison from './Comparison';

export default class Thinking extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            thinking: props.thinking,
            states: this.getStates(),
            cities: this.getCities()
        };
        this.handleThinkingChange = this.handleThinkingChange.bind(this);
        this.handleSelectedCity = this.handleSelectedCity.bind(this);
        this.getCityForId = this.getCityForId.bind(this);
    }
    getStates() {
        var options = [];
        options[options.length] = { value: options.length, label: this.props.locations[0][1] } ;
        for(var i = 1; i < this.props.locations.length ; i++) {
            if( this.props.locations[i][1] != this.props.locations[i-1][1] ) {
                options[options.length] = { value: options.length, label: this.props.locations[i][1] } ;
            }
        }
        console.log(options);
        return options;
    }
    getCities() {
        var cities = [];
        for(var i = 0; i < this.props.locations.length ; i++) {
            cities[i] = { 
                value: this.props.locations[i][0],
                state: this.props.locations[i][1],
                label: this.props.locations[i][3] } ;
            //console.log(options[i]);
        }
        return cities;
    }

    handleThinkingChange(e) {
        console.log(e);
    }
    handleSelectedCity(selected) {
        console.log('Selected CityID: ' + selected);
        this.setState( {selectedCity: selected});
    }

    getCityForId(value) {
        for(var i = 0; i < this.props.locations.length; i++) {
            if(this.props.locations[i][0] == value)  {
                console.log(this.props.locations[i]);
                return this.props.locations[i];
            }
        }
    }

    render() {
        return (
            <div>
                <ThinkingRadioGroup onChange={this.handleThinkingChange} />
                <LocationSelect onSelectedCity={this.handleSelectedCity}
                   states={this.state.states}
                   cities={this.state.cities}  />
                <Comparison cityId={this.state.cityId} pr={this.getCityForId('72-41980-700')} 
                city={this.getCityForId(this.state.selectedCity)} />
            </div>
        );
    }
}

/*
    render() {
        return (
            <div>
                <div onChange={this.props.handleThinkingChange}>
                <input type="radio" name="thinking" id="thinking-from-pr"
                    value="thinking-from-pr"
                    checked={this.state.thinking === 'thinking-from-pr'}
                    onChange={this.handleThinkingChange}
                />
                <label htmlFor="thinking-from-pr">{this.state.thinkingFromPR}</label>

                <input type="radio" name="thinking" id="thinking-to-pr"
                    value="thinking-to-pr"
                    checked={this.state.thinking === 'thinking-to-pr'}
                    onChange={this.handleThinkingChange}
                />
                <label htmlFor="thinking-to-pr">{this.state.thinkingToPR}</label>
                </div>
                <LocationSelect options={this.state.locations}
                    value={this.state.locations[0]} placeholder="Select a location" />
            </div>
        );
    }
*/