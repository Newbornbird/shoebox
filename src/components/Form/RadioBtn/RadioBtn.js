import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './RadioBtn.module.scss'; // Import css modules stylesheet as styles

class RadioBtn extends Component {
  render() {
    const { name, value, text } = this.props;

    return (
      <div>
        <label className={styles.wrapperRadio}>
          <input type="radio" name={name} value={value} />
          <div className={styles.radio} />
          {text}
        </label>
      </div>
    );
  }
}

RadioBtn.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string,
};

export default RadioBtn;
