import React, { Component } from 'react';
import styles from './Tasks.module.scss';

class TaskItemWrapper extends Component {
  render() {
    const { children } = this.props;

    return <li className={styles.TaskItemWrapper}>{children}</li>;
  }
}

export default TaskItemWrapper;
