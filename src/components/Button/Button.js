import React, { Component } from 'react';
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
      <button disabled={disabled} className={className} style={style}>
        <span>{text}</span>
      </button>
    );
  }
}

export default Button;
