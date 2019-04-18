import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Line.module.scss';

class Line extends Component {
  render() {
    const { style } = this.props;

    return <div className={styles.line} style={style} />;
  }
}

Line.propTypes = {
  style: PropTypes.object,
};

export default Line;
