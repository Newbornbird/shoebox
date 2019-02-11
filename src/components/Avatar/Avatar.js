import React, { Component } from 'react';
import styles from './Avatar.module.scss'; // Import css modules stylesheet as styles
import AvatarIcon from './AvatarIcon';
import Name from './Name';
import Position from './Position';
import Status from '../Status/Status';

class Avatar extends Component {
  
  render() {

    return (
      <div className={styles.avatar}>
        <AvatarIcon width="41" height="41"/>
        <div>
          <Name text="Augusta McCormick" />
          <Position text="Manager" />
        </div>
      </div>
    );
  }
}

export default Avatar;