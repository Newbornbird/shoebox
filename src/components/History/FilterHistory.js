import React, { Component } from 'react';
import Button from '../Button/Button';
import styles from './History.module.scss'; // Import css modules stylesheet as styles

class FilterHistory extends Component {
  render() {
    return (
      <div className={styles.filterHistory}>
        <Button transparentShadow text="All" />
        <Button transparentShadow text="Email" />
        <Button transparentShadow text="Text" />
        <Button transparentShadow text="Call Notes" />
        <Button transparentShadow text="Quotes" />
        <Button transparentShadow text="Attachments" />
        <Button transparentShadow text="Stage" />
        <Button transparentShadow text="Deal" />
      </div>
    );
  }
}

export default FilterHistory;
