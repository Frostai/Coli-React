import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * The rendering of selected items can be customized by providing a `selectionRenderer`.
 */
export default class LocationSelectField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 0, city: 0,
      cities: []
    };
    this.handleStatesChange = this.handleStatesChange.bind(this);
    this.handleCitiesChange = this.handleCitiesChange.bind(this);
  }

  handleStatesChange(event, index, value) {
    this.props.onSelectedState(this.props.states[index]);
    this.setState({ state: value });
  }
  handleCitiesChange(event, index, value) {
    this.props.onSelectedCity(this.props.cities[index]);
    this.setState({ city: value });
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
          {this.menuItems(this.props.cities)}
        </SelectField>
      </div>
    );
  }
}