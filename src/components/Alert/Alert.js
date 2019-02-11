import React, { Component } from 'react';
import Status from '../Status/Status';
import styles from './Alert.module.scss'; // Import css modules stylesheet as styles
import IconBell from '../../assets/images/icon_bell.svg';

class ButtonEdit extends Component {
  render() {
    return (
      <div className={styles.alert}>
        <img src={IconBell} />
        <Status customClass={styles.statusAlert} />
      </div>
    );
  }
}

export default ButtonEdit;
