import React, { Component } from 'react';
import TableComponent from '../Components/Table.component';
import {
  SPEEDUPS,
  SPEEDUP_DENOMINATIONS,
  getDataFromLocalStorage,
  setDataToLocalStorage
} from '../metadata';
import { windowWhen } from 'rxjs/operators';

export default class SpeedupsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: SPEEDUPS };
  }

  componentDidMount() {
    const speedups = this.state && this.state.data ? this.state.data : SPEEDUPS;
    speedups.values = getDataFromLocalStorage('speedups');
    this.setState({ data: speedups });
  }

  componentDidCatch(error, errorInfo) {
    // this.setState({ error });
    if (window.raven) {
      window.Raven.captureException(error, { extra: errorInfo });
    }
  }

  render() {
    return (
      <TableComponent
        data={this.state.data}
        onValueChange={this.onValueChange.bind(this)}
      />
    );
  }

  onValueChange(col, den, val) {
    let parsedValue = 0;
    if (val) {
      parsedValue = parseInt(val, 10);
    }
    const speedups = this.state.data;
    if (!speedups.values) {
      speedups.values = {};
    }
    if (!speedups.values[col.name]) {
      speedups.values[col.name] = {};
    }
    speedups.values[col.name][den.name] = parsedValue;
    speedups.values = this.computeTotals(speedups.values);
    this.setState({ data: speedups });
    setDataToLocalStorage('speedups', speedups.values);
  }

  computeTotals(values) {
    for (let value in values) {
      let total = 0;
      for (let den in values[value]) {
        if (
          den === 'Total Minutes' ||
          den === 'Total Hours' ||
          den === 'Total Days'
        ) {
          continue;
        }
        const denValue = SPEEDUP_DENOMINATIONS[den].value;
        total += denValue * parseInt(values[value][den], 10);
      }
      values[value]['Total Minutes'] = total;
      values[value]['Total Hours'] = total / 60;
      values[value]['Total Days'] = total / (60 * 24);
    }
    return values;
  }
}
