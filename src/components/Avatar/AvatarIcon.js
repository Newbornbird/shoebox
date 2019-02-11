import React, { Component } from 'react';
import styles from './Avatar.module.scss'; // Import css modules stylesheet as styles
import Photo from '../../assets/images/icon_avatar.png';

class AvatarIcon extends Component {
  render() {
    const { width, height } = this.props;

    return (
      <div sclassName={styles.avatarIcon}>
        <img width={width} height={height} src={Photo} alt="" />
      </div>
    );
  }
}

export default AvatarIcon;
