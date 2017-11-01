import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

export default class ProductsTable extends React.Component {
    constructor(props) {
        super(props);
        this.tableHeader = this.tableHeader.bind(this);
        this.tableRows = this.tableRows.bind(this);
    }

    tableHeader(options) {
        var thStyle = {
            'whiteSpace': 'normal'
        };
        return options.map((option) => (
            <TableHeaderColumn style={thStyle}>{option}</TableHeaderColumn>
        ));
    }

    tableRows(options) {
        console.log(options);
        var height = {
            height: '40px',
            'whiteSpace': 'normal'
        };
        var padding = {padding: "0 10px 0 20px"};
        return options.map((option) => (
            <TableRow style={height}>
                <TableRowColumn style={Object.assign(height,padding)}>{option[0]}</TableRowColumn>
                <TableRowColumn style={height}>{option[1]}</TableRowColumn>
                <TableRowColumn style={height}>{option[2]}</TableRowColumn>
                <TableRowColumn style={height}>{option[3]}</TableRowColumn>
            </TableRow>
        ));
    }


    render() {
        return (
            <Table>
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                >
                    <TableRow>
                        {this.tableHeader(this.props.data.header)}
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} >
                    {this.tableRows(this.props.data.products)}
                </TableBody>
            </Table>
        );
    }
}


