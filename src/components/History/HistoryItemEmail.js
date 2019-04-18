import React, { Component } from 'react';
import HistoryItemWrapper from './HistoryItemWrapper';
import ButtonEdit from '../Button/ButtonEdit';
import ButtonDelete from '../Button/ButtonDelete';
import styles from './History.module.scss';

class HistoryItemEmail extends Component {
  render() {
    const { title, text, date, info } = this.props;

    return (
      <HistoryItemWrapper>
        <div className={`${styles.historyItemWrapper} ${styles.historyEmail}`}>
          <div className={styles.itemHeader}>
            <h3 className={styles.itemTitle}>{title}</h3>
            <div className={styles.itemHeaderControl}>
              <ButtonEdit />
              <ButtonDelete />
            </div>
          </div>

          <p className={styles.itemText}>{text}</p>
          <div className={styles.itemInfo}>
            <p>{info}</p>

            <p>{date}</p>
          </div>
        </div>
      </HistoryItemWrapper>
    );
  }
}

export default HistoryItemEmail;
