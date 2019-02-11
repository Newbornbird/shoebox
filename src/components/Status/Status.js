import React, { Component } from 'react';

import classnames from 'classnames';
import styles from './Status.module.scss'; // Import css modules stylesheet as styles

class Status extends Component {
  render() {
    const { active, customClass } = this.props;

    const className = classnames(styles.status, {
      [styles.active]: active,
      [customClass]: !!customClass,
    });

    return <div active={active} className={className} />;
  }
}

export default Status;
