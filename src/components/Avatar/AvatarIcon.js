import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
import styles from './Avatar.module.scss';

class AvatarIcon extends Component {
  render() {
    const { width, height, linkUser, src } = this.props;

    return (
      // <NavLink className={styles.avatarIcon} to={linkUser}>
      <img width={width} height={height} src={src} alt="" />
      // </NavLink>
    );
  }
}

AvatarIcon.defaultProps = {
  width: 30,
  height: 30,
};

AvatarIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  linkUser: PropTypes.string,
  src: PropTypes.string,
};

export default AvatarIcon;
