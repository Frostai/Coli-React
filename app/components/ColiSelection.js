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
    }

    handleSalaryChange(value) {
        this.props.onChange({ salary: value });
    }

    handleSelectedState(value) {
        console.log(value);
        this.props.onChange({ selectedState: value });
    }

    handleSelectedCity(value) {
        console.log('handleSelectedCity');
        console.log(value);
        this.props.onChange({ city: value.rowId });
    }

    render() {
        return (
            <div>
                <ThinkingRadioGroup
                    onChange={this.handleThinking} 
                    default={this.props.thinking}
                    resources={this.props.resources.thinking} />
                <LocationSelect
                    onSelectedState={this.handleSelectedState}
                    onSelectedCity={this.handleSelectedCity}
                    states={this.props.states}
                    cities={this.props.cities}
                    resources={this.props.resources.location} />
                <SalarySlider onChange={this.handleSalaryChange}
                    resources={this.props.resources.salary} 
                    min={20000} max={250000} step={5000} defaultSalary={50000}
                />
            </div>
        );
    }
}