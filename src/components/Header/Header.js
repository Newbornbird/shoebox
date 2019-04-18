import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import Alert from '../Alert/Alert';
import AvatarIcon from '../Avatar/AvatarIcon';
import ButtonIcon from '../Button/ButtonIcon';
import styles from './Header.module.scss';
import Photo1 from '../../assets/images/icon_avatar-1.png';

function Header({ children }) {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <Logo />
        <div className={styles.menuContainer}>{children}</div>
        <div className={styles.headerControls}>
          <AvatarIcon src={Photo1} width={30} height={30} />
          <Alert active />
          <ButtonIcon btnSent type="menu" />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.object,
};

export default Header;
