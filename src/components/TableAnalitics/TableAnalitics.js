import React, { Component } from 'react';
import styles from './TableAnalitics.module.scss';

class TableAnalitics extends Component {
  render() {
    return (
      <table className={styles.textRight}>
        <thead>
          <tr>
            <th className={[`${styles.textLeft} ${styles.titleRow}`]}>who</th>
            <th>Calls</th>
            <th>Emails</th>
            <th>Mail</th>
            <th>Progressions</th>
            <th className={styles.paddingRight}>Connects</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.contentRow}>
            <th className={[`${styles.textLeft} ${styles.titleRow}`]}>My averages</th>
            <td>87</td>
            <td>4</td>
            <td>4</td>
            <td>4</td>
            <td className={styles.paddingRight}>6</td>
          </tr>
          <tr className={styles.contentRow}>
            <th className={[`${styles.textLeft} ${styles.titleRow}`]}>Team averages</th>
            <td>17</td>
            <td>5</td>
            <td>8</td>
            <td>3</td>
            <td className={styles.paddingRight}>2</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TableAnalitics;
