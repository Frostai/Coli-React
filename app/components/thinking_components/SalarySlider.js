import React from 'react';
import Slider from 'material-ui/Slider';



export default class SalarySlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { salary: this.props.defaultSalary };
        this.handleChangeSalary = this.handleChangeSalary.bind(this);
    }

    handleChangeSalary(event, newValue) {
        this.props.onChange(newValue);
        this.setState({salary: newValue});
    }

    render() {
        return (
        <div>
            <h3>Actualmente mi sueldo es / Currently my salary is: {this.state.salary.toLocaleString()}</h3>
            <Slider
                min={this.props.min} max={this.props.max} 
                step={this.props.step} value={this.state.salary}
                onChange={this.handleChangeSalary} />
        </div>);
    }
}