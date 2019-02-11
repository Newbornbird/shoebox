import React, { Component } from 'react';
import styles from './Button.module.scss'; // Import css modules stylesheet as styles
import IconEdit from '../../assets/images/icon_edit.svg';

class ButtonEdit extends Component {
  render() {
    return (
      <button className={styles.btnEdit}>
        <img src={IconEdit} />
      </button>
    );
  }
}

export default ButtonEdit;
