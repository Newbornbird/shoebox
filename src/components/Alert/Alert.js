import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Status from '../Status/Status';
import styles from './Alert.module.scss'; // Import css modules stylesheet as styles
import IconBell from '../../assets/images/icon_bell.svg';

class Alert extends Component {
  render() {
    const { active } = this.props;
    return (
      <div className={styles.alert}>
        <img src={IconBell} />
        <Status active={active} customClass={styles.statusAlert} />
      </div>
    );
  }
}

Alert.propTypes = {
  active: PropTypes.bool,
};

export default Alert;
