import React from 'react';
import PropTypes from 'prop-types';
import styles from './TableAnalitics.module.scss';

const TableAnalitics = props => {
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
      <tbody>{props.children}</tbody>
    </table>
  );
};

TableAnalitics.propTypes = {
  children: PropTypes.object,
};

export default TableAnalitics;
