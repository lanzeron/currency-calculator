import './list.css';

import React from 'react';
import propTypes from 'prop-types';
import { Table } from 'reactstrap';

import { getFormatedDate } from '../../utils'

const List = ({ data }) => (
  <React.Fragment>
    <h2 className='title' >{`Currency Exchange rate for ${getFormatedDate(Date.now())}`}</h2>
    <Table>
      <thead>
      <tr>
        <th>Buying rate</th>
        <th>Currency code</th>
        <th>Median rate</th>
        <th>Selling rate</th>
      </tr>
      </thead>
      <tbody>
      {
        data.map((item, index) =>
        <tr key={index}>
          <th>{item.buying_rate}</th>
          <th>{item.currency_code}</th>
          <th>{item.median_rate}</th>
          <th>{item.selling_rate}</th>
        </tr>)
      }
      </tbody>
    </Table>
  </React.Fragment>
);

List.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired
};

export default List
