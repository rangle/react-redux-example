import React from 'react';
import { connect } from 'react-redux';

import { counterActions } from '../actions';

import Counter from '../components/counter';
import Container from '../components/container';

function mapStateToProps(state) {
  return {
    counter: state.counter.get('count'),
  };
}

function CounterPage({ counter, increment, decrement }) {
  return (
    <Container testid="counter" size={2} center>
      <h2 data-testid="counter-heading" className="center caps" id="qa-counter-heading">Counter</h2>

      <Counter
        counter={ counter }
        increment={ increment }
        decrement={ decrement } />
    </Container>
  );
}

CounterPage.propTypes = {
  counter: React.PropTypes.number,
  increment: React.PropTypes.func,
  decrement: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  { ...counterActions }
)(CounterPage);
