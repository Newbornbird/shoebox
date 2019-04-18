import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.scss';

class Name extends Component {
  render() {
    const { text } = this.props;

    return <p className={styles.avatarName}>{text}</p>;
  }
}

Name.propTypes = {
  text: PropTypes.string,
};

export default Name;
