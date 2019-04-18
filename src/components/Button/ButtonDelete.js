import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss'; // Import css modules stylesheet as styles
import IconDelete from '../../assets/images/icon_delete.svg';

class ButtonDelete extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button className={styles.btnDelete} onClick={handleClick}>
        <img src={IconDelete} />
      </button>
    );
  }
}

ButtonDelete.propTypes = {
  handleClick: PropTypes.func,
};

export default ButtonDelete;
