import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * The rendering of selected items can be customized by providing a `selectionRenderer`.
 */
export default class LocationSelectField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value : 0 };
        this.handleChange = this.handleChange.bind(this);
    }

  handleChange(event, index, value) {
      this.setState({value});
  }


  menuItems(options) {
    console.log(this.state.value);
    return options.map( (option) => (
      <MenuItem
        key={option.value}
        value={option.value}
        primaryText={option.state}
      />
    ));
  }

  render() {
    return (
      <SelectField
        hintText="Select a state"
        value={this.state.value}
        onChange={this.handleChange}
      >
        {this.menuItems(this.props.options)}
      </SelectField>
    );
  }
}