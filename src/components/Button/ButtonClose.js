import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss'; // Import css modules stylesheet as styles
import IconClose from '../../assets/images/icon-close-button.svg';

class ButtonClose extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button className={styles.buttonClose} onClick={handleClick}>
        <img src={IconClose} />
      </button>
    );
  }
}

ButtonClose.propTypes = {
  handleClick: PropTypes.func,
};

export default ButtonClose;
