import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../ducks/counter';

import Counter from '../components/counter';
import Container from '../components/container';

function mapStateToProps(state) {
  return {
    counter: state.counter.get('count'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch(increment()),
    decreaseCounter: () => dispatch(decrement()),
  };
}

function CounterPage({ counter, increaseCounter, decreaseCounter }) {
  return (
    <Container size={2} center>
      <h2 className="center caps" id="qa-counter-heading">Counter</h2>

      <Counter
        counter={ counter }
        increment={ increaseCounter }
        decrement={ decreaseCounter } />
    </Container>
  );
}

CounterPage.propTypes = {
  counter: React.PropTypes.number,
  increaseCounter: React.PropTypes.func,
  decreaseCounter: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage);
