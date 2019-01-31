import React from 'react';
import InputRange from 'react-input-range';
import './range.scss';

class Range extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 800, max: 10000 },
    };
  }

  render() {
    return (
      <InputRange
        formatLabel={value => `$${value}`}
        maxValue={50000}
        minValue={0}
        value={this.state.value}
        onChange={value => this.setState({ value })}
      />
    );
  }
}

export default Range;
