import React, { Component } from 'react';
import HistoryItemWrapper from './HistoryItemWrapper';
import ButtonEdit from '../Button/ButtonEdit';
import ButtonDelete from '../Button/ButtonDelete';
import styles from './History.module.scss';

class HistoryItemAttachments extends Component {
  render() {
    const { text, date, info } = this.props;

    return (
      <HistoryItemWrapper>
        <div className={`${styles.historyItemWrapper} ${styles.historyItemAttachments}`}>
          <div className={styles.itemHeader}>
            <p className={styles.itemText}>{text}</p>
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

export default HistoryItemAttachments;
