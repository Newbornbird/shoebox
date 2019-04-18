import React, { Component } from 'react';
import styles from './History.module.scss';

class HistoryItemWrapper extends Component {
  render() {
    const { children } = this.props;

    return <li>{children}</li>;
  }
}

export default HistoryItemWrapper;
