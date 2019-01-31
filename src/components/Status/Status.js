import React, { Component } from 'react';

import classnames from 'classnames';
import styles from './Status.module.scss'; // Import css modules stylesheet as styles

class Status extends Component {
  render() {
    const { active } = this.props;

    const className = classnames(styles.status, {
      [styles.active]: active,
    });

    return (
      <div active={active} className={className} >
      </div>
    );
  }
}

export default Status;
