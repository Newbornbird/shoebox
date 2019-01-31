import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss'; // Import css modules stylesheet as styles
import IconSent from '../../assets/images/icon_sent_email.svg';
import IconCall from '../../assets/images/icon_call_answer.svg';
import IconDrop from '../../assets/images/icon_drop_back.svg';
import IconFilter from '../../assets/images/icon_filters.svg';

class ButtonIcon extends Component {
  render() {
    const { disabled,
       text,
       btnSent,
       btnDrop,
       btnFilter,
       type } = this.props;
    let icon = null;
    switch (type) {
      case 'sent':
       (icon = IconSent );
       break;
       case 'call':
       (icon = IconCall );
       break;
       case 'drop':
       (icon = IconDrop );
       break;
       case 'filter':
       (icon = IconFilter );
       break;
    }
    const className = classnames(styles.btn, styles.default, {
      [styles.disabled]: disabled,
      [styles.btnSent]: btnSent,
      [styles.btnDrop]: btnDrop,
      [styles.btnFilter]: btnFilter,
    });
    return (
      <button disabled={disabled} className={className}>
        <span>
          <img src={icon} />
        </span>
        <span>{text}</span>
      </button>
    );
  }
}

export default ButtonIcon;
