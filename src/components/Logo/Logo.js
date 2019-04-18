import React from 'react';
import styles from './Logo.module.scss'; // Import css modules stylesheet as styles
import IconLogo from '../../assets/images/logo.svg';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={IconLogo} />
    </div>
  );
};

export default Logo;
