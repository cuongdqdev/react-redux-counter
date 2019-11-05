import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/counter';

export class Counter extends Component {


    increase = () => {
        this.props.counterIncrease()
    }

    decrease = () => {
        this.props.counterDecrease()
    }

    render() {
        return (
            <div>
                <h1>Ứng dụng Counter sử dụng ReactJS và Redux</h1>
                <button onClick={this.increase}> + </button>
                <span> {this.props.counter.count} </span>
                <button onClick={this.decrease}> - </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter
})

export default connect(mapStateToProps, actions)(Counter)
