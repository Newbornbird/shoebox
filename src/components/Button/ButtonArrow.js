import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.module.scss'; // Import css modules stylesheet as styles

class ButtonArrow extends Component {
  render() {
    const { disabled, text, btnArrow, btnArrowDisabled, handleClick } = this.props;

    const className = classnames(styles.btn, styles.default, styles.btnArrow, {
      [styles.disabled]: disabled,
      [styles.btnArrow]: btnArrow,
      [styles.btnArrowDisabled]: btnArrowDisabled,
    });
    return (
      <button disabled={disabled} className={className} onClick={handleClick}>
        <span>{text}</span>
      </button>
    );
  }
}

ButtonArrow.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
  btnArrow: PropTypes.bool,
  btnArrowDisabled: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default ButtonArrow;
