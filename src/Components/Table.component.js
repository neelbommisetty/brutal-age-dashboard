import React, { Component } from 'react';
import { Table, Input, Popup } from 'semantic-ui-react';
var converter = require('number-to-words');

export default class TableComponent extends Component {
  generateTableHeader() {
    const hCols = this.props.data.columns.map((col, i) => {
      return (
        <Table.HeaderCell singleLine key={i}>
          {col.name}
        </Table.HeaderCell>
      );
    });

    return (
      <Table.Header>
        <Table.Row>{hCols}</Table.Row>
      </Table.Header>
    );
  }

  generateRows() {
    const rows = this.props.data.denominations.map((den, i) => {
      return <Table.Row key={i}>{this.generateRow(den)}</Table.Row>;
    });
    if (this.props.type === 'resources') {
      rows.push(
        <Table.Row key={2103}>{this.generateRow({ name: 'Total' })}</Table.Row>
      );
    } else {
      rows.push(
        <Table.Row key={2103}>
          {this.generateRow({ name: 'Total Minutes' })}
        </Table.Row>
      );
      rows.push(
        <Table.Row key={2104}>
          {this.generateRow({ name: 'Total Hours' })}
        </Table.Row>
      );
      rows.push(
        <Table.Row key={2105}>
          {this.generateRow({ name: 'Total Days' })}
        </Table.Row>
      );
    }
    return rows;
  }

  generateRow(den) {
    const row = this.props.data.columns.map((col, i) => {
      if (i === 0) {
        return <Table.Cell key={i}>{den.name}</Table.Cell>;
      }

      const value =
        this.props.data.values &&
        this.props.data.values[col.name] &&
        this.props.data.values[col.name][den.name]
          ? this.props.data.values[col.name][den.name]
          : '0';
      if (den.name === 'Total') {
        return (
          <Popup
            inverted
            position="bottom center"
            trigger={
              <Table.Cell key={i}>
                {value ? value.toLocaleString() : '-'}
              </Table.Cell>
            }
            content={`${converter.toWords(value)} ${col.name}`}
          />
        );
      } else if (
        den.name === 'Total Minutes' ||
        den.name === 'Total Hours' ||
        den.name === 'Total Days'
      ) {
        return (
          <Table.Cell key={i}>
            {value ? value.toLocaleString() : '-'}
          </Table.Cell>
        );
      }
      return (
        <Table.Cell key={i}>
          <Input
            value={value}
            size="mini"
            fluid
            onChange={e => {
              this.props.onValueChange(col, den, e.target.value);
            }}
          />
        </Table.Cell>
      );
    });
    return row;
  }

  generateTable() {
    return (
      <Table unstackable celled compact fixed>
        {this.generateTableHeader()}
        <Table.Body>{this.generateRows()}</Table.Body>
      </Table>
    );
  }

  render() {
    return <div>{this.generateTable()}</div>;
  }
}
