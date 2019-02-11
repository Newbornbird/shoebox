import React, { Component } from 'react';
import styles from './Button.module.scss'; // Import css modules stylesheet as styles
import IconClose from '../../assets/images/icon-close-button.svg';

class ButtonClose extends Component {
  render() {
    return (
      <button className={styles.buttonClose}>
        <img src={IconClose} />
      </button>
    );
  }
}

export default ButtonClose;
