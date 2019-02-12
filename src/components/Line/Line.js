import React, { Component } from 'react';
import styles from './Line.module.scss';

class Line extends Component {
  render() {
    const { labelText, placeholder, style } = this.props;

    return <div className={styles.line} style={style} />;
  }
}

export default Line;
