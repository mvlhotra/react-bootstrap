import React, { Component } from 'react';
import { JsonTable } from 'react-json-to-html';


class Results extends Component {
  render() {
    return (
      <div className="search-results">
        <hr></hr>
        <h1>Results</h1>
        <JsonTable className="result-table" json={this.props.results} />
      </div>
    );
  }
}

export default Results;