import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.scss';

class Position extends Component {
  render() {
    const { text } = this.props;

    return <p className={styles.avatarPosition}>{text}</p>;
  }
}

Position.propTypes = {
  text: PropTypes.string,
};

export default Position;
