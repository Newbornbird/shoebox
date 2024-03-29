import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonClose from '../../Button/ButtonClose';
import styles from './HeaderForm.module.scss'; // Import css modules stylesheet as styles

class HeaderForm extends Component {
  render() {
    const { text } = this.props;

    return (
      <header className={styles.headerForm}>
        <h3 className={styles.titleForm}>{text}</h3>
        <ButtonClose />
      </header>
    );
  }
}

HeaderForm.propTypes = {
  text: PropTypes.string,
};

export default HeaderForm;
