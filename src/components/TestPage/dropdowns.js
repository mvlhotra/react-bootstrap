import React, { Component } from 'react';
import Results from './Results'
import { JsonTable } from 'react-json-to-html';


const dataArray = [
  ["property_name", "continent", "country", "state_province", "engagement", "daily_weekly", "momentum", "passion", "excitement", "consideration", "favorability"],
  ["nfl", "north_america", "", "", "43", "42", "43", "77", "75", "66", "43"],
  ["nfl", "north_america", "canada", "", "23", "33", "66", "45", "23", "86", "56"],
  ["nfl", "north_america", "usa", "", "99", "55", "86", "54", "45", "23", "66"],
  ["nfl", "north_america", "canada", "ontario", "23", "77", "75", "66", "54", "43", "66"],
  ["nfl", "north_america", "canada", "quebec", "54", "45", "23", "77", "33", "99", "86"],
  ["nfl", "north_america", "usa", "washington", "23", "33", "66", "42", "99", "23", "77"],
  ["nfl", "north_america", "usa", "california", "45", "77", "66", "43", "77", "75", "55"],
  ["nfl", "north_america", "usa", "florida", "23", "33", "66", "56", "45", "23", "43"],
  ["nhl", "north_america", "", "", "99", "55", "86", "77", "33", "66", "43"],
  ["nhl", "north_america", "canada", "", "77", "43", "42", "42", "99", "55", "56"],
  ["nhl", "north_america", "usa", "", "45", "33", "52", "43", "23", "77", "42"],
  ["nhl", "north_america", "canada", "ontario", "66", "77", "75", "56", "45", "99", "43"],
  ["nhl", "north_america", "canada", "quebec", "86", "45", "23", "77", "33", "33", "56"],
  ["nhl", "north_america", "usa", "washington", "42", "86", "54", "45", "23", "99", "77"],
  ["nhl", "north_america", "usa", "california", "23", "42", "23", "33", "66", "23", "77"],
  ["nhl", "north_america", "usa", "florida", "66", "23", "77", "23", "77", "33", "43"]];

function parseData(data) {
  let dataPoints = [];
  for (let i = 1; i < data.length; i++) {
    let dataObj = {};
    data[i].forEach((attribute, ind) => {
      dataObj[data[0][ind]] = attribute;
    });
    dataPoints.push(dataObj);
  }
  return dataPoints;
}

function search(data, criteria) {
  let filtered = [];
  data.forEach(point => {
    let match = true;
    Object.keys(point).forEach(attribute => {
      if (criteria[attribute] && (point[attribute] !== criteria[attribute])) {
        match = false;
      }
    });
    if (match) {
      filtered.push(point);
    }
  })
  return filtered;
}

function getData(data, ind) {
  let dataSet = new Set();
  for (let i = 1; i < data.length; i++) {
    dataSet.add(data[i][ind]);
  }
  return Array.from(dataSet);
}

function makeItem(item) {
  return <option key={item} value={item}>{item}</option>;
}

function makeTable(results) {
  return (
    <div>

    </div>
  )
}

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { continentValue: 'north_america', countryValue: '', stateValue: '', results: {}, data: parseData(dataArray) };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    //  I know, I know. This could be done better I'm sure :) 

    if (event.target.className === 'continent') {
      this.setState({ continentValue: event.target.value })
    } else if (event.target.className === 'country') {
      this.setState({ countryValue: event.target.value });
    } else {
      this.setState({ stateValue: event.target.value });
    }

  }
  handleSubmit(event) {
    const results = search(parseData(dataArray), { continent: this.state.continentValue, country: this.state.countryValue, state_province: this.state.stateValue });
    this.setState({ results: results });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Continent:
          <select value={this.state.continentValue} className="continent" onChange={this.handleChange}>
              {getData(dataArray, 1).map(makeItem)}
            </select>
          </label>
          <label>
            Country:
          <select value={this.state.countryValue} className="country" onChange={this.handleChange}>
              {getData(dataArray, 2).map(makeItem)}
            </select>
          </label>
          <label>
            State:
          <select value={this.state.stateValue} className="state" onChange={this.handleChange}>
              {getData(dataArray, 3).map(makeItem)}
            </select>
          </label>
          <input type="submit" value="Search!" />
        </form>
        <Results results={this.state.results} />
      </div>
    )
  }
}

export default Dropdown;