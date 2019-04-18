import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.scss'; // Import css modules stylesheet as styles

class Checkbox extends Component {
  render() {
    const { text, name, value } = this.props;

    return (
      <label className={styles.wrapperCheckbox}>
        <input type="checkbox" name={name} value={value} />
        <div className={styles.checkbox} />
        {text}
      </label>
    );
  }
}

Checkbox.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default Checkbox;
