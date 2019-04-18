import React from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import ButtonArrow from '../Button/ButtonArrow';
import TitleSection from '../TitleSection/TitleSection';
import styles from './Box.module.scss';

function BoxEmptyPage() {
  return (
    <div>
      <Header />
      <div className={styles.containerContent}>
        <TitleSection text="Box" />
        <div className={styles.rows}>
          <div>
            <p>You do not have any box</p>
            <div className={styles.row}>
              <Button text="+ Add box" />
            </div>
            <div className={styles.row}>
              <ButtonArrow text="+ Add box" />

              <Button transparentShadow text="Deal box" />
              <Button transparentShadow text="Company Box" />
              <Button transparentShadow text="Box Contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxEmptyPage;
