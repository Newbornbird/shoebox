import React, { Component } from 'react';
import styles from './Avatar.module.scss';

class Position extends Component {
  render() {
    const { text } = this.props;

    return <p className={styles.avatarPosition}>{text}</p>;
  }
}

export default Position;