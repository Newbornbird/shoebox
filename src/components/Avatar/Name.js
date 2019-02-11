import React, { Component } from 'react';
import styles from './Avatar.module.scss';

class Name extends Component {
  render() {
    const { text } = this.props;

    return <p className={styles.avatarName}>{text}</p>;
  }
}

export default Name;
