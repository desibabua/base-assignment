import React from 'react';
import BaseInput from './BaseInput';

class BaseTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: undefined,
    };
    this.getNumber = this.getNumber.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValueInBase(number, base) {
    return number.split('').every((e) => Number.isInteger(parseInt(e, base)));
  }

  getNumber(newBase) {
    if (!this.state.number) return '';
    const { value, base } = this.state.number;
    return parseInt(value, base).toString(newBase);
  }

  onChange(value, base) {
    if (this.isValueInBase(value, base)) {
      this.setState(() => {
        if (!value) return { number: undefined };
        return { number: { value, base } };
      });
    }
  }

  render() {
    const [, , ...bases] = [...Array(17).keys()]
    
    const baseInputs = bases.map((base) => (
      <BaseInput key={base} number={this.getNumber(base)} base={base} onChange={this.onChange} />
    ));

    return (
      <div>
        {baseInputs}
      </div>
    );
  }
}

export default BaseTable;
