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
      state: null, city: null,
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
        primaryText={option.label.replace(/([a-z A-z]*) ([A-Z]{2})/g, '$1, $2')}
      />
    ));
  }

  render() {
    return (
      <div>
        <SelectField
          hintText={this.props.resources.stateText}
          value={this.state.state}
          onChange={this.handleStatesChange}
          autoWidth={true} >
          {this.menuItems(this.props.states)}
        </SelectField>
        <SelectField
          hintText={this.props.resources.cityText}
          value={this.state.city}
          onChange={this.handleCitiesChange}
          autoWidth={true} >
          {this.menuItems(this.props.cities)}
        </SelectField>
      </div>
    );
  }
}