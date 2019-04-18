import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

class Input extends Component {
  render() {
    const { style, labelText, placeholder } = this.props;

    return (
      <div className={styles.inputWrapper} style={style}>
        <label>
          <span className={styles.labelText}>{labelText}</span>
          <input className={styles.input} placeholder={placeholder} />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  style: PropTypes.object,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
