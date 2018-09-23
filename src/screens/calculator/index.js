import './calculator.css';

import React from 'react';
import propTypes from 'prop-types';
import {
  Col,
  Form,
  FormGroup,
  Input
} from 'reactstrap';

import { calculateFromKuna, calculateKuna } from '../../utils';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kunaValue: 0,
      otherCurrencyValue: 0,
      currencyType: props.data[0]
    };
    this.calculate = this.calculate.bind(this);
    this.onCurrencyChange = this.onCurrencyChange.bind(this);
  }

  static propTypes = {
    data: propTypes.arrayOf(propTypes.object)
  };


  calculate(kunaValue, otherCurrencyValue) {
    this.setState({
      kunaValue,
      otherCurrencyValue
    })
  }

  onCurrencyChange(e) {
    const { otherCurrencyValue } = this.state;

    this.setState({
        currencyType: this.props.data
          .find(item => item.currency_code === e.target.value)
      },
      () => this.calculate(
        calculateKuna(otherCurrencyValue, this.state.currencyType),
        otherCurrencyValue)
    );
  }

  render() {
    const {currencyType, kunaValue, otherCurrencyValue} = this.state;

    return (
      <Form>
        <h2>Currency Calculator</h2>
        <FormGroup row>
          <Col sm={2} xs={4}>
            <Input
              disabled
              type='text'
              placeholder='HRK'
            />
          </Col>
          <Col sm={2} xs='auto'>
            <Input
              value={kunaValue}
              onChange={e => this.calculate(
                e.target.value,
                calculateFromKuna(e.target.value, currencyType))
              }
              type='number'
              name='text'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col
            sm={2}
            xs={4}
          >
            <Input
              onChange={this.onCurrencyChange}
              type='select'
              name='select'
              placeholder='currency'
            >
              {this.props.data
                .map((item, index) =>
                  <option
                    key={index}
                  >
                    {item.currency_code}
                    </option>
                )}
            </Input>
          </Col>
          <Col
            sm={2}
            xs='auto'
          >
            <Input
              onChange={e => this.calculate(
                calculateKuna(e.target.value, currencyType),
                e.target.value)
              }
              value={otherCurrencyValue}
              type='number'
              name='text'
            />
          </Col>
        </FormGroup>
      </Form>)
  }
}

export default Calculator;
