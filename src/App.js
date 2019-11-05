import React, { Component } from 'react';
import { connect } from 'react-redux';

export class App extends Component {

  state = {
    count: 0
  }

  increment = () => {
    // thêm sau
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    // thêm sau
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <h1>Ứng dụng Counter sử dụng ReactJS và Redux</h1>
        <button onClick={this.increment}> + </button>
        <span> {this.props.count} </span>
        <button onClick={this.decrement}> - </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(App)
