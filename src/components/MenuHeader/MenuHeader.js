import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
// import { NavLink } from 'react-router-dom';
import styles from './MenuHeader.scss';

function MenuHeader() {
  return (
    <nav className={styles.mainMenu__wrapper}>
      <HorizontalScroll className={styles.mainMenu}>
        {/* <NavLink to="" className={styles.mainMenu__item}>
          LOW PRIORITY
        </NavLink>
        <NavLink to="" className={styles.mainMenu__item}>
          LOW PRIORITY
        </NavLink>
        <NavLink to="" className={styles.mainMenu__item}>
          HOT PROSPECTS
        </NavLink>
        <NavLink to="" className={styles.mainMenu__item}>
          OLD CUSTOMERS
        </NavLink>
        <NavLink to="" className={styles.mainMenu__item}>
          LOW PRIORITY
        </NavLink>
        <NavLink to="" className={styles.mainMenu__item}>
          ARCHIVE
        </NavLink>
        <NavLink to="" className={styles.mainMenu__item}>
          OLD CUSTOMERS
        </NavLink> */}
      </HorizontalScroll>
    </nav>
  );
}

export default MenuHeader;
