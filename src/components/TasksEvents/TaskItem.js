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
        <div className={styles.ItemHeader}>
          <h3 className={styles.ItemTitle}>{title}</h3>
          <div className={styles.ItemHeaderControl}>
            <ButtonEdit />
            <ButtonDelete />
          </div>
        </div>
        <p className={styles.ItemText}>{text}</p>
        <p className={styles.ItemDate}>{date}</p>
      </TaskItemWrapper>
    );
  }
}

export default TaskItem;
