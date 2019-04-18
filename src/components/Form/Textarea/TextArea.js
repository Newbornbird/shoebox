import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Textarea.module.scss';

class Textarea extends Component {
  render() {
    const { style, labelText, placeholder } = this.props;

    return (
      <div className={styles.inputWrapper} style={style}>
        <label>
          <span className={styles.labelText}>{labelText}</span>
          <textarea className={styles.textarea} placeholder={placeholder} />
        </label>
      </div>
    );
  }
}

Textarea.propTypes = {
  style: PropTypes.object,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Textarea;
