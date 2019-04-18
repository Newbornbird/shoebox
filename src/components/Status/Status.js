import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Status.module.scss'; // Import css modules stylesheet as styles

class Status extends Component {
  render() {
    const { active, customClass } = this.props;

    const className = classnames(styles.status, {
      [styles.active]: active,
      [customClass]: !!customClass,
    });

    return <div className={className} />;
  }
}

Status.propTypes = {
  active: PropTypes.bool,
  customClass: PropTypes.string,
};

export default Status;
