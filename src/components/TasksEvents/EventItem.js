import React, { Component } from 'react';
import TaskItemWrapper from './TaskItemWrapper';
import ButtonEdit from '../Button/ButtonEdit';
import ButtonDelete from '../Button/ButtonDelete';
import AvatarIcon from '../Avatar/AvatarIcon';
import styles from './Tasks.module.scss';
import Photo1 from '../../assets/images/icon_avatar-1.png';
import Photo2 from '../../assets/images/icon_avatar-2.png';
import Photo3 from '../../assets/images/icon_avatar.png';

class EventItem extends Component {
  render() {
    const { title, text, date, info } = this.props;
    return (
      <TaskItemWrapper>
        <div className={styles.ItemHeader}>
          <h3 className={styles.ItemTitle}>{title}</h3>
          <div className={styles.ItemHeaderControl}>
            <ButtonEdit />
            <ButtonDelete />
          </div>
        </div>
        <p className={styles.ItemDate}>{date}</p>
        <p className={styles.ItemText}>{text}</p>
        <div className={styles.ItemInfo}>
          <p>{info}</p>
          <div className={styles.EventItemUsers}>
            <AvatarIcon src={Photo1} width={23} height={23} />
            <AvatarIcon src={Photo2} width={23} height={23} />
            <AvatarIcon src={Photo3} width={23} height={23} />
          </div>
        </div>
      </TaskItemWrapper>
    );
  }
}

export default EventItem;
