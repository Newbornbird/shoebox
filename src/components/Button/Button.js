import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.module.scss'; // Import css modules stylesheet as styles

class Button extends Component {
  render() {
    const {
      style,
      disabled,
      text,
      transparentBorder,
      transparentBorderDisabled,
      transparentShadow,
      transparentShadowDisabled,
      btnSent,
      full,
      handleClick,
    } = this.props;

    const className = classnames(styles.btn, styles.default, {
      [styles.disabled]: disabled,
      [styles.transparentBorder]: transparentBorder,
      [styles.transparentBorderDisabled]: transparentBorderDisabled,
      [styles.transparentShadow]: transparentShadow,
      [styles.transparentShadowDisabled]: transparentShadowDisabled,
      [styles.btnSent]: btnSent,
      [styles.full]: full,
    });
    return (
      <button disabled={disabled} className={className} style={style} onClick={handleClick}>
        <span>{text}</span>
      </button>
    );
  }
}

Button.propTypes = {
  style: PropTypes.object,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  btnSent: PropTypes.bool,
  btnDrop: PropTypes.bool,
  btnFilter: PropTypes.bool,
  type: PropTypes.string,
  transparentBorder: PropTypes.bool,
  transparentBorderDisabled: PropTypes.bool,
  transparentShadow: PropTypes.bool,
  transparentShadowDisabled: PropTypes.bool,
  full: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Button;
