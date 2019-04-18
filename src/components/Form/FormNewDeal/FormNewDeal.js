import React, { Component } from 'react';
import Button from '../../Button/Button';
import ButtonIcon from '../../Button/ButtonIcon';
import HeaderForm from '../HeaderForm/HeaderForm';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';
import Dropdown from '../Dropdown/Dropdown';
import Textarea from '../Textarea/TextArea';
import RangeSingleValue from '../Range/RangeSingleValue';
import Line from '../../Line/Line';
import styles from './FormNewDeal.module.scss'; // Import css modules stylesheet as styles

class FormNewDeal extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <form className={styles.formNewDeal}>
        <HeaderForm text="Add New Deal" />
        <div className={styles.row}>
          <Input labelText="Deal" placeholder="For example, Waves Music" />
        </div>
        <div className={styles.row}>
          <Input labelText="Deal amount" placeholder="For example, $100,000.00" />
        </div>
        <div className={styles.row}>
          <Input labelText="Probability" placeholder="For example, 10%" />
        </div>
        <div className={styles.row}>
          <Input labelText="Adjusted forecast amount" placeholder="For example, $100,000.00" />
        </div>
        <div className={[`${styles.dFlex} ${styles.alignBottom}  ${styles.row}`]}>
          <Input style={{ marginRight: '5px' }} labelText="Mobile phone" placeholder="For example, $100,000.00" />
          <ButtonIcon style={{ marginRight: '5px' }} btnSent type="call" />
          <ButtonIcon btnSent type="sent" />
        </div>
        <div className={[`${styles.dFlex} ${styles.alignBottom}  ${styles.row}`]}>
          <Input
            style={{ marginRight: '5px' }}
            labelText="Work email"
            placeholder="For example, ToddSteele@inbox.com"
          />
          <ButtonIcon btnSent type="sent" />
        </div>
        <div className={styles.row}>
          <Dropdown labelText="Stage" placeholder="Other" />
        </div>
        <div className={styles.row}>
          <Dropdown labelText="Source" placeholder="Trade show" />
        </div>
        <div className={styles.row}>
          <Dropdown labelText="Associated contact(s)" placeholder="Contact Name" />
        </div>
        <Checkbox text="Added to campaign" />
        <div className={styles.row}>
          <Dropdown labelText="Associated company" placeholder="Company" />
        </div>
        <div className={styles.row}>
          <Textarea labelText="Summary" placeholder="For example" />
        </div>
        <div className={styles.row}>
          <Dropdown labelText="Add to box" placeholder="Hot prospects" />
        </div>
        <Checkbox text="Note added" />
        <RangeSingleValue />
        <Checkbox text="Call" />
        <Checkbox text="Quote approved" />
        <Checkbox text="Text sent" />
        <Line style={{ marginTop: '30px' }} />
        <Line />
        <div style={{ marginTop: '20px' }} className={[`${styles.dFlex} ${styles.row}`]}>
          <Dropdown labelText="" placeholder="Choose fields template" />
          <Button style={{ marginLeft: '18px' }} text="+ Add" />
        </div>
        <div className={styles.row}>
          <Dropdown labelText="Current CRM" placeholder="Jefferson CRM" />
        </div>
        <div className={styles.row}>
          <Input labelText="Size" placeholder="For example" />
        </div>
        <div className={styles.row}>
          <Input labelText="How long they've had current system" placeholder="For example" />
        </div>
        <Button style={{ marginTop: '30px' }} text="Save" full />
      </form>
    );
  }
}

export default FormNewDeal;
