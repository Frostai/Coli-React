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
        console.log(options);
        return options.map((option) => (
            <TableHeaderColumn>{option}</TableHeaderColumn>
        ));
    }

    tableRows(options) {
        console.log(options);
        return options.map((option) => (
            <TableRow>
                <TableRowColumn>{option[0]}</TableRowColumn>
                <TableRowColumn>{option[1]}</TableRowColumn>
                <TableRowColumn>{option[2]}</TableRowColumn>
                <TableRowColumn>{option[3]}</TableRowColumn>
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


