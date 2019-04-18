import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonEdit from '../Button/ButtonEdit';
import ButtonDelete from '../Button/ButtonDelete';
import styles from './Box.module.scss';

class BoxItem extends Component {
  render() {
    const { countCards, title, subtitle, user, date } = this.props;
    return (
      <div className={styles.boxItem}>
        <div className={styles.boxItem__line} />
        <div className={styles.boxItem__control}>
          <p>Total cards {countCards}</p>
          <div className={styles.itemHeaderControl}>
            <ButtonEdit />
            <ButtonDelete />
          </div>
        </div>
        <h3 className={styles.boxItem__title}>{title}</h3>
        <p className={styles.boxItem__category}>{subtitle}</p>
        <p className={styles.boxItem__user}>{user}</p>
        <p className={styles.boxItem__date}>{date}</p>
      </div>
    );
  }
}

BoxItem.propTypes = {
  countCards: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  user: PropTypes.string,
  date: PropTypes.string,
};

export default BoxItem;
