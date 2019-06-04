import React, { Component } from 'react';

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


class Results extends Component {
  render() {
    return (
      <div>
        <h1>Results:</h1>
        <table>
          <thead>
            <tr>
              {dataArray[0].map(heading => <th key={heading}>{heading}</th>)}
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Results;