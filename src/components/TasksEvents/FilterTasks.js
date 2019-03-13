import React, { Component } from 'react';
import Button from '../Button/Button';
import styles from './Tasks.module.scss'; // Import css modules stylesheet as styles

class FilterTasks extends Component {
  render() {
    return (
      <div className={styles.FilterTasks}>
        <Button transparentShadow text="All" />
        <Button transparentShadow text="Tasks" />
        <Button transparentShadow text="Events" />
      </div>
    );
  }
}

export default FilterTasks;
