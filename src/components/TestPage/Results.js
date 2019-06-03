import React, { Component } from 'react';

class Results extends Component {
  render() {
    return (
      <div>
        <h1>Results:</h1>
        <table>
          <tr>
            <th>One</th>
            <th>Two</th>
            <th>Three</th>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Results;