// CounterComponent.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './redux/actions'; // adjust the path based on your project structure

class CounterComponent extends Component {
  render() {
    return (
      <div>
        <h1>Counter: {this.props.count}</h1>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => { console.log(state);
  return {
    count: state.mycounter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
