import React from 'react';
import ThinkingRadioGroup from './thinking_components/RadioGroup';
import LocationSelect from './thinking_components/LocationSelectField';
import SalarySlider from './thinking_components/SalarySlider';


export default class ColiSelection extends React.Component {
    constructor(props) {
        super(props);
        this.handleThinking = this.handleThinking.bind(this);
        this.handleSalaryChange = this.handleSalaryChange.bind(this);
        this.handleSelectedState = this.handleSelectedState.bind(this);
        this.handleSelectedCity = this.handleSelectedCity.bind(this);
    }

    handleThinking(selected) {
        this.props.onChange({ thinking: selected });
        console.log('City: ' + selected);
    }

    handleSalaryChange(value) {
        this.props.onChange({ salary: value });
        console.log('ThinkingSalary: $' + value);
    }

    handleSelectedState(value) {
        console.log(value);
        this.props.onChange({ selectedState: value });
    }

    handleSelectedCity(value) {
        console.log('Selected a city: ');
        console.log(value);
        this.props.onChange({ city: value.rowId });
    }

    render() {
        return (
            <div>
                <ThinkingRadioGroup onChange={this.handleThinking} default={this.props.thinking} />
                <LocationSelect
                    onSelectedState={this.handleSelectedState}
                    onSelectedCity={this.handleSelectedCity}
                    states={this.props.states}
                    cities={this.props.cities} />
                <SalarySlider onChange={this.handleSalaryChange}
                    min={20000} max={250000} step={5000} defaultSalary={50000}
                />
            </div>
        );
    }
}