import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss'; // Import css modules stylesheet as styles
import Arrow from '../../assets/images/arrow.svg';

class Arrows extends Component {
  render() {
    const { arrowsDisabled,
      arrows,
      arrowsNext,
      } = this.props;
    
    const className = classnames(styles.arrows, {
      [styles.arrowsDisabled]: arrowsDisabled,
      [styles.arrows]: arrows,
      [styles.arrowsNext]: arrowsNext,
    });
    return (
      <button arrowsDisabled={arrowsDisabled} className={className}>
        <img src={Arrow} />
      </button>
    );
  }
}

export default Arrows;
