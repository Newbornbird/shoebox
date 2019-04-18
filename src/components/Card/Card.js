import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

class Card extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.cardContainer}>
        <div className={styles.card}>{children}</div>
      </div>
    );
  }
}

Card.propTypes = {
  children: PropTypes.object,
};

export default Card;
