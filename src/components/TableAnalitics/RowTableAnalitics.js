import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TableAnalitics.module.scss';

class RowTableAnalitics extends Component {
  render() {
    const { titleRow, call, emails, email, progressions, connects } = this.props;
    return (
      <tr className={styles.contentRow}>
        <th className={[`${styles.textLeft} ${styles.titleRow}`]}>{titleRow}</th>
        <td>{call}</td>
        <td>{emails}</td>
        <td>{email}</td>
        <td>{progressions}</td>
        <td className={styles.paddingRight}>{connects}</td>
      </tr>
    );
  }
}

RowTableAnalitics.propTypes = {
  titleRow: PropTypes.string,
  call: PropTypes.number,
  emails: PropTypes.number,
  email: PropTypes.number,
  progressions: PropTypes.number,
  connects: PropTypes.number,
};

export default RowTableAnalitics;
