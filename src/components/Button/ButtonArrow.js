import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss'; // Import css modules stylesheet as styles

class ButtonArrow extends Component {
  render() {
    const { disabled, text, btnArrow, btnArrowDisabled } = this.props;

    const className = classnames(styles.btn, styles.default, styles.btnArrow, {
      [styles.disabled]: disabled,
      [styles.btnArrow]: btnArrow,
      [styles.btnArrowDisabled]: btnArrowDisabled,
    });
    return (
      <button disabled={disabled} className={className}>
        <span>{text}</span>
      </button>
    );
  }
}

export default ButtonArrow;
