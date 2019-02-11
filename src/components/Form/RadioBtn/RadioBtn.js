import React, { Component } from 'react';
import styles from './RadioBtn.module.scss'; // Import css modules stylesheet as styles

class RadioBtn extends Component {
  render() {
    const { fieldYes, fieldNo } = this.props;

    return (
      <div>
        <label className={styles.wrapperRadio}>
        <input type="radio" name="radio" />
          <div className={styles.radio} />
          {fieldYes}
        </label>
        <label className={styles.wrapperRadio}>
        <input type="radio" name="radio" />
          <div className={styles.radio} />
          {fieldNo}
        </label>
      </div>
      
    );
  }
}

export default RadioBtn;
