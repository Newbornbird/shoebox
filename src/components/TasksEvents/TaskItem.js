import React, { Component } from 'react';
import TaskItemWrapper from './TaskItemWrapper';
import ButtonEdit from '../Button/ButtonEdit';
import ButtonDelete from '../Button/ButtonDelete';
import styles from './Tasks.module.scss';

class TaskItem extends Component {
  render() {
    const { title, text, date } = this.props;
    return (
      <TaskItemWrapper>
        <div className={styles.itemHeader}>
          <h3 className={styles.itemTitle}>{title}</h3>
          <div className={styles.itemHeaderControl}>
            <ButtonEdit />
            <ButtonDelete />
          </div>
        </div>
        <p className={styles.itemText}>{text}</p>
        <p className={styles.itemDate}>{date}</p>
      </TaskItemWrapper>
    );
  }
}

export default TaskItem;
