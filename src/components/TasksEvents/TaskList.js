import React, { Component } from 'react';
import styles from './Tasks.module.scss';
import TaskItem from './TaskItem';
import EventItem from './EventItem';

class TaskList extends Component {
  render() {
    return (
      <ul className={styles.taskList}>
        <TaskItem
          title="Task Name"
          text="There are two main interpretations of the concept of text"
          date="Jun 9, 2018"
        />
        <TaskItem
          title="Task Name"
          text="There are two main interpretations of the concept of text"
          date="Jun 9, 2018"
        />
        <EventItem
          title="Event Name"
          date="on Friday at 13:00 PM"
          text="There are two main interpretations of the concept of text."
          info="Farland Avenue San Antonio, TX 78258"
        />
        <EventItem
          title="Event Name"
          date="on Friday at 13:00 PM"
          text="There are two main interpretations of the concept of text."
          info="Farland Avenue San Antonio, TX 78258 Farland Avenue San Antonio, TX 78258"
        />
      </ul>
    );
  }
}

export default TaskList;
