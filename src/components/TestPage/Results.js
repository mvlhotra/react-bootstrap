import React, { Component } from 'react';
import { JsonTable } from 'react-json-to-html';


class Results extends Component {
  render() {
    return (
      <div>
        <hr></hr>
        <h1>Results</h1>
        <JsonTable json={this.props.results} />
      </div>
    );
  }
}

export default Results;