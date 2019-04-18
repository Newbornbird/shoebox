import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.scss'; // Import css modules stylesheet as styles
import AvatarIcon from './AvatarIcon';
import Name from './Name';
import Position from './Position';
// import Status from '../Status/Status';

class Avatar extends Component {
  render() {
    const { linkUser, srcIcon, name, positionText, status } = this.props;
    const statusActive = status === 'active';
    return (
      <div className={styles.avatar}>
        <AvatarIcon width={41} height={41} linkUser={linkUser} src={srcIcon} />
        <div>
          {name ? <Name text={name} /> : <p>User</p>}
          <Position text={positionText} />
        </div>
        {status && <div className={statusActive ? styles.active : styles.unActive} />}
      </div>
    );
  }
}

Avatar.propTypes = {
  linkUser: PropTypes.string,
  srcIcon: PropTypes.string,
  name: PropTypes.string,
  positionText: PropTypes.string,
  status: PropTypes.string,
};

export default Avatar;
