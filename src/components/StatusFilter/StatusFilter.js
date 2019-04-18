import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './StatusFilter.module.scss';

class StatusFilter extends Component {
  render() {
    const { text, deemed, customerComments, declined, draft, open, signed, opened, sent, accepted } = this.props;

    const className = classnames(styles.statusFilter, {
      [styles.deemed]: deemed,
      [styles.customerComments]: customerComments,
      [styles.declined]: declined,
      [styles.draft]: draft,
      [styles.open]: open,
      [styles.signed]: signed,
      [styles.opened]: opened,
      [styles.sent]: sent,
      [styles.accepted]: accepted,
    });
    return <span className={className}>{text}</span>;
  }
}

StatusFilter.propTypes = {
  text: PropTypes.string,
  deemed: PropTypes.string,
  customerComments: PropTypes.string,
  declined: PropTypes.string,
  draft: PropTypes.string,
  open: PropTypes.string,
  signed: PropTypes.string,
  opened: PropTypes.string,
  sent: PropTypes.string,
  accepted: PropTypes.string,
};

export default StatusFilter;
