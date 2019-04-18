import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.module.scss'; // Import css modules stylesheet as styles
import Arrow from '../../assets/images/arrow.svg';

class Arrows extends Component {
  render() {
    const { arrowsDisabled, arrows, arrowsNext, handleClick } = this.props;

    const className = classnames(styles.arrows, {
      [styles.arrowsDisabled]: arrowsDisabled,
      [styles.arrows]: arrows,
      [styles.arrowsNext]: arrowsNext,
    });
    return (
      <button arrowsDisabled={arrowsDisabled} className={className} onClick={handleClick}>
        <img src={Arrow} />
      </button>
    );
  }
}

Arrows.propTypes = {
  arrowsDisabled: PropTypes.bool,
  arrows: PropTypes.bool,
  arrowsNext: PropTypes.bool,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Arrows;
