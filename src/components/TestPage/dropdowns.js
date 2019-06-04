import React, { Component } from 'react';
import Results from './Results'
import { dataArray, parseData, search, getData } from './helpers'

function makeDropdownItem(item) {
  return <option key={item} value={item}>{item}</option>;
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
    const searchResults = search(parseData(dataArray), { continent: this.state.continentValue, country: this.state.countryValue, state_province: this.state.stateValue });
    this.setState({ results: searchResults });
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
              {getData(dataArray, 1).map(makeDropdownItem)}
            </select>
          </label>
          <label>
            Country:
          <select value={this.state.countryValue} className="country" onChange={this.handleChange}>
              {getData(dataArray, 2).map(makeDropdownItem)}
            </select>
          </label>
          <label>
            State:
          <select value={this.state.stateValue} className="state" onChange={this.handleChange}>
              {getData(dataArray, 3).map(makeDropdownItem)}
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