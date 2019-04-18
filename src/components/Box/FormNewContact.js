import React, { Component } from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import TitleSection from '../TitleSection/TitleSection';
import Input from '../Form/Input/Input';
import Dropdown from '../Form/Dropdown/Dropdown';
import Textarea from '../Form/Textarea/TextArea';
import Checkbox from '../Form/Checkbox/Checkbox';
import RadioBtn from '../Form/RadioBtn/RadioBtn';
import Line from '../Line/Line';
import styles from './Box.module.scss';

class FormNewContact extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <Header />
        <div className={styles.containerBoxForm}>
          <TitleSection text="Create Box for Contact" />
          <form className={styles.formNewBox}>
            <h3>Box</h3>
            <div className={styles.rowForm}>
              <Input labelText="Box Name" placeholder="For example, Hot Prospects" />
            </div>
            <div className={styles.rowForm}>
              <Dropdown labelText="Choose Type" placeholder="Contact" />
            </div>
            <div className={styles.rowForm}>
              <Input labelText="First Name" placeholder="" />
            </div>
            <div className={styles.rowForm}>
              <Input labelText="Last Name" placeholder="" />
            </div>
            <div className={styles.rowForm}>
              <Input labelText="Company" placeholder="" />
            </div>
            <div className={styles.rowForm}>
              <Input labelText="Job Title" placeholder="" />
            </div>
            <div className={styles.rowForm}>
              <Dropdown labelText="Source" placeholder="International Kitchen and Bath Trade Show 2019" />
            </div>
            <div className={styles.rowForm}>
              <Input labelText="Associated deal(s)" placeholder="" />
            </div>
            <div className={styles.rowForm}>
              <Dropdown labelText="Industry" placeholder="Customized list" />
            </div>
            <Checkbox name="demonstration" text="Viewed a demonstration" />

            <Line style={{ marginTop: '30px', marginBottom: '10px' }} />
            <div className={styles.rowCards}>
              <p>
                Cards <span>344</span>
              </p>
              <p className={styles.rowCards__all}>View all cards</p>
            </div>

            <h4>Assign the box</h4>
            <div className={styles.rowForm}>
              <Input labelText="To" placeholder="" />
            </div>
            <div className={[`${styles.rowTextarea} ${styles.rowForm}`]}>
              <Textarea labelText="Description of assignment" placeholder="" />
            </div>

            <Checkbox name="updates" text="Get updates:" />
            <div className={[`${styles.rowRadio} ${styles.rowForm}`]}>
              <RadioBtn name="radio" value="daily" text="Daily" />
              <RadioBtn name="radio" value="weekly" text="Weekly" />
              <RadioBtn name="radio" value="happens" text="As it happens" />
            </div>
            <Button text="Send" full />
          </form>
        </div>
      </div>
    );
  }
}

export default FormNewContact;
