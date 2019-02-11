import React, { Component } from 'react';
import styles from './Checkbox.module.scss'; // Import css modules stylesheet as styles

class Checkbox extends Component {
  render() {
    const { text } = this.props;

    return (
      <label className={styles.wrapperCheckbox}>
        <input type="checkbox" name="" />
        <div className={styles.checkbox} />
        {text}
      </label>
    );
  }
}

export default Checkbox;
