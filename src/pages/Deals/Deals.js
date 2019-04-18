import React, { Component } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Alert from '../../components/Alert/Alert';
import Avatar from '../../components/Avatar/Avatar';
import Arrows from '../../components/Button/Arrows';
import Button from '../../components/Button/Button';
import ButtonIcon from '../../components/Button/ButtonIcon';
import Logo from '../../components/Logo/Logo';
import TableAnalitics from '../../components/TableAnalitics/TableAnalitics';
import RowTableAnalitics from '../../components/TableAnalitics/RowTableAnalitics';
import Photo1 from '../../assets/images/icon_avatar-1.png';
// import styles from './ .module.scss';

class Deals extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <MainLayout>
        <Alert />
        <Alert active />
        <Avatar srcIcon={Photo1} linkUser="#" name="Augusta McCormick" positionText="Manager" status="active" />
        <Arrows />
        <Arrows arrowsNext />
        <Button text="+ Add new deal" />
        <Button full text="Next" />
        <ButtonIcon text="Btn" />
        <Logo />
        <TableAnalitics>
          <RowTableAnalitics titleRow="My averages" call={87} emails={4} email={4} progressions={4} connects={6} />
          <RowTableAnalitics titleRow="Team averages" call={17} emails={5} email={8} progressions={3} connects={2} />
        </TableAnalitics>
      </MainLayout>
    );
  }
}

export default Deals;
