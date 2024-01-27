// CounterComponent.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './redux/actions'; // adjust the path based on your project structure

class CounterComponent extends Component {
  render() {
    return (
      <div>
        <h1>Counter: {this.props.count}</h1>
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.inDecrement} disabled={this.props.isDecrementDisabled}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => { console.log(state);
  return {
    count: state.mycounter.count,
    isDecrementDisabled: state.mycounter.isDecrementDisabled,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    inDecrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
