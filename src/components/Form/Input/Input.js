import React, { Component } from 'react';
import styles from './Input.module.scss';

class Input extends Component {
  render() {
    const { labelText, placeholder } = this.props;

    return (
      <div className={styles.inputRow}>
        <label>
          <span className={styles.labelText}>{labelText}</span>
          <input className={styles.input} placeholder={placeholder} />
        </label>
      </div>
    );
  }
}

export default Input;
