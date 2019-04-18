import React, { Component } from 'react';
import styles from './Tasks.module.scss';

class TaskItemWrapper extends Component {
  render() {
    const { children } = this.props;

    return <li className={styles.taskItemWrapper}>{children}</li>;
  }
}

export default TaskItemWrapper;
