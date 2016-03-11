import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions/counter';

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

const CounterPage = ({ counter, increaseCounter, decreaseCounter }) => {
  return (
    <Container>
      <Column className="col-4">
        <h1 className="center" id="qa-counter-heading">Counter</h1>

        <Counter
          counter={ counter }
          increment={ increaseCounter }
          decrement={ decreaseCounter } />
      </Column>
    </Container>
  );
};

CounterPage.propTypes = {
  counter: React.PropTypes.number,
  increaseCounter: React.PropTypes.func,
  decreaseCounter: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage);
