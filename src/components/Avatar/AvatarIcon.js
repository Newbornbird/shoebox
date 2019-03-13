import React, { Component } from 'react';
import styles from './Avatar.module.scss'; // Import css modules stylesheet as styles
import Photo from '../../assets/images/icon_avatar.png';

class AvatarIcon extends Component {
  render() {
    const { width, height, linkUser } = this.props;

    return (
      <a sclassName={styles.avatarIcon} href={linkUser}>
        <img width={width} height={height} src={Photo} alt="" />
      </a>
    );
  }
}

AvatarIcon.defaultProps = {
  width: 30,
  height: 30,
};

export default AvatarIcon;
