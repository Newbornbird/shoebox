import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss'; // Import css modules stylesheet as styles
import IconSent from '../../assets/images/icon_sent_email.svg';
import IconCall from '../../assets/images/icon_call_answer.svg';
import IconDrop from '../../assets/images/icon_drop_back.svg';
import IconFilter from '../../assets/images/icon_filters.svg';
import IconMenu from '../../assets/images/icon_menu.svg';

class ButtonIcon extends Component {
  render() {
    const { style, disabled, text, btnSent, btnDrop, btnFilter, type, handleClick } = this.props;
    let icon = null;
    // eslint-disable-next-line default-case
    switch (type) {
      case 'sent':
        icon = IconSent;
        break;
      case 'call':
        icon = IconCall;
        break;
      case 'drop':
        icon = IconDrop;
        break;
      case 'filter':
        icon = IconFilter;
        break;
      case 'menu':
        icon = IconMenu;
        break;
    }
    const className = classnames(styles.btn, styles.default, {
      [styles.disabled]: disabled,
      [styles.btnSent]: btnSent,
      [styles.btnDrop]: btnDrop,
      [styles.btnFilter]: btnFilter,
    });
    return (
      <button disabled={disabled} className={className} style={style} onClick={handleClick}>
        <span>
          <img src={icon} />
        </span>
        <span>{text}</span>
      </button>
    );
  }
}

ButtonIcon.propTypes = {
  style: PropTypes.object,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  btnSent: PropTypes.bool,
  btnDrop: PropTypes.bool,
  btnFilter: PropTypes.bool,
  type: PropTypes.string,
  handleClick: PropTypes.func,
};

export default ButtonIcon;
