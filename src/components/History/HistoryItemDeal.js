import React, { Component } from 'react';
import HistoryItemWrapper from './HistoryItemWrapper';
import ButtonEdit from '../Button/ButtonEdit';
import ButtonDelete from '../Button/ButtonDelete';
import styles from './History.module.scss';

class HistoryItemDeal extends Component {
  render() {
    const { text, date, info } = this.props;

    return (
      <HistoryItemWrapper>
        <div className={`${styles.historyItemWrapper} ${styles.historyItemDeal}`}>
          <div className={styles.itemHeader}>
            <h3 className={styles.itemTitle}>{text}</h3>
            <div className={styles.itemHeaderControl}>
              <ButtonEdit />
              <ButtonDelete />
            </div>
          </div>

          <div className={styles.itemInfo}>
            <p>{info}</p>

            <p>{date}</p>
          </div>
        </div>
      </HistoryItemWrapper>
    );
  }
}

export default HistoryItemDeal;
