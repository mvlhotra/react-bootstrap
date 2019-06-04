import React, { Component } from 'react';
import { connect } from 'react-redux';

import './TestPage.scss'
import testService from 'services/test.service';
import { test } from 'actions/TestPage.actions';
import Dropdown from './dropdowns';
import Title from './Title';

class TestPage extends Component {
  componentDidMount() {
    testService.test();
    this.props.test();
  }

  render() {
    return (
      <div className="TestPage">
        <Title />
        <Dropdown />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    test: () => dispatch(test('test')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
