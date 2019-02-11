import React, { Component } from 'react';
import styles from './Button.module.scss'; // Import css modules stylesheet as styles
import IconDelete from '../../assets/images/icon_delete.svg';

class ButtonDelete extends Component {
  render() {
    
    return (
      <button className={styles.btnDelete}>
        <img src={IconDelete} />
      </button>
    );
  }
}

export default ButtonDelete;