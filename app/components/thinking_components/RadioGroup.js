import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

/**
 * The rendering of selected items can be customized by providing a `selectionRenderer`.
 */

export default class ThinkingRadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thinking: {
                from: {
                    value: 'from-pr',
                    label: "Estoy pensando mudarme desde Puerto Rico / I am thinking of moving from Puerto Rico"
                },
                to: {
                    value: 'to-pr',
                    label: "Estoy pensando mudarme a Puerto Rico / I am thinking of moving to Puerto Rico"
                }
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event, value) {
        this.props.onChange(value);
        //console.log('RadioGroup change: ' + value);
    }

    render() {
        return (
            <div>
                <RadioButtonGroup name="thinking" valueSelected={this.props.default} onChange={this.handleChange}>
                    <RadioButton
                        value={this.state.thinking.from.value}
                        label={this.props.resources.from}
                    />
                    <RadioButton
                        value={this.state.thinking.to.value}
                        label={this.props.resources.to}
                    />
                </RadioButtonGroup>
            </div>
        );
    }
}