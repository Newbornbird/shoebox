import React from 'react';
import Header from '../Header/Header';
import BoxItem from './BoxItem';
import Button from '../Button/Button';
import TitleSection from '../TitleSection/TitleSection';
import styles from './Box.module.scss';

function BoxPage() {
  return (
    <div>
      <Header />
      <div className={styles.containerContent}>
        <TitleSection text="Boxes" />
        <Button text="+ Add box" />
        <div className={styles.boxContainer}>
          <BoxItem countCards={234} title="Hot prospects" subtitle="Contacts" user="Anant Jain" date="Jun 12, 2019" />
          <BoxItem countCards={245} title="Low priority" subtitle="Contacts" user="Anant Jain" date="Jun 12, 2019" />
          <BoxItem countCards={234} title="Old customers" subtitle="Contacts" user="Anant Jain" date="Jun 12, 2019" />
          <BoxItem countCards={245} title="Archive" subtitle="Contacts" user="Anant Jain" date="Jun 12, 2019" />
          <BoxItem countCards={234} title="Hot prospects" subtitle="Contacts" user="Anant Jain" date="Jun 12, 2019" />
          <BoxItem countCards={234} title="Hot prospects" subtitle="Contacts" user="Anant Jain" date="Jun 12, 2019" />
          <BoxItem countCards={12} title="Hot prospects" subtitle="Contacts" user="Anant Jain" date="Jun 12, 2019" />
        </div>
      </div>
    </div>
  );
}

export default BoxPage;
