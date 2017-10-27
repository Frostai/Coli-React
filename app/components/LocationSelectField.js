import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * The rendering of selected items can be customized by providing a `selectionRenderer`.
 */
export default class LocationSelectField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { state: 0, city: 0 ,
      cities: []
    };
    this.handleStatesChange = this.handleStatesChange.bind(this);
    this.handleCitiesChange = this.handleCitiesChange.bind(this);
  }

  handleStatesChange(event, index, value) {
    this.setState({
      state: value,
      city: 0,
      cities: this.getCitiesForState(value)
    });
  }

  getCitiesForState(value) {
    var cities = [];
    for (var i = 0; i < this.props.cities.length; i++) {        
      if (this.props.cities[i].state == this.props.states[value].label ) {
        console.log(this.props.cities[i].value + '==' + this.props.states[value].label);
        cities[cities.length] = { value: cities.length, rowId: this.props.cities[i].value, label: this.props.cities[i].label};
      }
    }
    return cities;
  }

  handleCitiesChange(event, index, value) {
    console.log('Selected City: ID=' + this.state.cities[value].value + ' Name=' + this.state.cities[value].label);
    this.props.onSelectedCity( this.state.cities[value].rowId );
    this.setState( {city: value} );
  }


  menuItems(options) {
    return options.map((option) => (
      <MenuItem
        key={option.value}
        value={option.value}
        primaryText={option.label}
      />
    ));
  }

  render() {
    return (
      <div>
        <SelectField
          hintText="Select a state"
          value={this.state.state}
          onChange={this.handleStatesChange}
          autoWidth={true} >
          {this.menuItems(this.props.states)}
        </SelectField>
        <SelectField
          hintText="Select a city"
          value={this.state.city}
          onChange={this.handleCitiesChange}
          autoWidth={true} >
          {this.menuItems(this.state.cities)}
        </SelectField>
      </div>
    );
  }
}