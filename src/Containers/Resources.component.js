import React, { Component } from 'react';
import TableComponent from '../Components/Table.component';
import {
  RESOURCES,
  getDataFromLocalStorage,
  setDataToLocalStorage,
  RESOURCE_DENOMINATIONS
} from '../metadata';

export default class ResourcesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: RESOURCES };
  }

  componentDidMount() {
    const resources =
      this.state && this.state.data ? this.state.data : RESOURCES;
    resources.values = getDataFromLocalStorage('resources');
    this.setState({ data: RESOURCES });
  }
  componentDidCatch(error, errorInfo) {
    // this.setState({ error });
    if (window.raven) {
      window.Raven.captureException(error, {
        extra: errorInfo
      });
    }
  }

  render() {
    return (
      <TableComponent
        data={this.state.data}
        onValueChange={this.onValueChange.bind(this)}
        type="resources"
      />
    );
  }

  onValueChange(col, den, val) {
    let parsedValue = 0;
    if (val) {
      parsedValue = parseInt(val, 10);
    }
    const resources = this.state.data;
    if (!resources.values) {
      resources.values = {};
    }
    if (!resources.values[col.name]) {
      resources.values[col.name] = {};
    }
    resources.values[col.name][den.name] = parsedValue;
    resources.values = this.computeTotals(resources.values);
    this.setState({ data: resources });
    // save to local storage
    setDataToLocalStorage('resources', resources.values);
  }

  computeTotals(values) {
    for (let value in values) {
      let total = 0;
      for (let den in values[value]) {
        if (den === 'Total') {
          continue;
        }
        const denValue = RESOURCE_DENOMINATIONS[den].value;
        total += denValue * parseInt(values[value][den], 10);
      }
      values[value]['Total'] = total;
    }
    return values;
  }
}
