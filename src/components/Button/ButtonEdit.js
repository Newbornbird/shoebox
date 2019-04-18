import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss'; // Import css modules stylesheet as styles
import IconEdit from '../../assets/images/icon_edit.svg';

class ButtonEdit extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button className={styles.btnEdit} onClick={handleClick}>
        <img src={IconEdit} />
      </button>
    );
  }
}

ButtonEdit.propTypes = {
  handleClick: PropTypes.func,
};

export default ButtonEdit;
