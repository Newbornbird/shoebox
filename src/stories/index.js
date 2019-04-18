/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import '../index.scss';
import '../styles/fonts.scss';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Logo from '../components/Logo/Logo';
import Button from '../components/Button/Button';
import ButtonIcon from '../components/Button/ButtonIcon';
import Arrows from '../components/Button/Arrows';
import ButtonArrow from '../components/Button/ButtonArrow';
import ButtonEdit from '../components/Button/ButtonEdit';
import ButtonDelete from '../components/Button/ButtonDelete';
import ButtonClose from '../components/Button/ButtonClose';
import Alert from '../components/Alert/Alert';
import Range from '../components/Form/Range/Range';
import RangeSingleValue from '../components/Form/Range/RangeSingleValue';
import Checkbox from '../components/Form/Checkbox/Checkbox';
import RadioBtn from '../components/Form/RadioBtn/RadioBtn';
import Avatar from '../components/Avatar/Avatar';
import AvatarIcon from '../components/Avatar/AvatarIcon';
import Name from '../components/Avatar/Name';
import Position from '../components/Avatar/Position';
import Status from '../components/Status/Status';
import StatusFilter from '../components/StatusFilter/StatusFilter';
import Input from '../components/Form/Input/Input';
import Textarea from '../components/Form/Textarea/TextArea';
import Dropdown from '../components/Form/Dropdown/Dropdown';
import TableAnalitics from '../components/TableAnalitics/TableAnalitics';
import FormNewDeal from '../components/Form/FormNewDeal/FormNewDeal';
import PageEmptyDeal from '../components/PageEmptyDeal/PageEmptyDeal';
import Card from '../components/Card/Card';
import BoxItem from '../components/Box/BoxItem';
import BoxPage from '../components/Box/BoxPage';
import BoxEmptyPage from '../components/Box/BoxEmptyPage';
import FormNewCompany from '../components/Box/FormNewCompany';
import FormNewContact from '../components/Box/FormNewContact';
import './welcome';

storiesOf('Logo', module).add('Logo', () => <Logo />);

storiesOf('Buttons', module)
  .add('default', () => <Button text="+ Add contact" />)
  .add('disabled', () => <Button disabled text="+ Add contact" />)
  .add('transparentBorder', () => <Button transparentBorder text="Choose file" />)
  .add('transparentBorderDisabled', () => <Button transparentBorder transparentBorderDisabled text="Choose file" />)
  .add('transparentShadow', () => <Button transparentShadow text="deal box" />)
  .add('transparentShadowDisabled', () => <Button transparentShadow transparentShadowDisabled text="deal box" />)
  .add('btnCall', () => <ButtonIcon btnSent type="call" />)
  .add('btnCallDisabled', () => <ButtonIcon btnSent disabled type="call" />)
  .add('btnSent', () => <ButtonIcon btnSent type="sent" />)
  .add('btnSentDisabled', () => <ButtonIcon btnSent disabled text="" type="sent" />)
  .add('Drop', () => <ButtonIcon btnDrop type="drop" text="Drop back" />)
  .add('DropDisabled', () => <ButtonIcon btnDrop disabled type="drop" text="Drop back" />)
  .add('Filter', () => <ButtonIcon btnFilter type="filter" text="Filters" />)
  .add('FilterDisabled', () => <ButtonIcon btnFilter disabled type="filter" text="Filters" />)
  .add('btnMenu', () => <ButtonIcon btnSent type="menu" />)
  .add('ArrowsPrev', () => <Arrows arrows />)
  .add('ArrowsNext', () => <Arrows arrows arrowsNext />)
  .add('ArrowsDisabled', () => <Arrows arrows arrowsNext arrowsDisabled />)
  .add('ButtonArrow', () => <ButtonArrow btnArrow text="+ Add contact" />)
  .add('ButtonArrowDisabled', () => <ButtonArrow disabled btnArrowDisabled text="+ Add contact" />)
  .add('ButtonEdit', () => <ButtonEdit />)
  .add('ButtonDelete', () => <ButtonDelete />)
  .add('ButtonClose', () => <ButtonClose />);

storiesOf('Alert', module).add('Alert', () => <Alert />);

storiesOf('Range', module)
  .add('Range', () => <Range />)
  .add('RangeSingleValue', () => <RangeSingleValue />);

storiesOf('Checkbox', module).add('Checkbox', () => <Checkbox text="Added to campaign" />);

storiesOf('Radio', module).add('Radio', () => <RadioBtn name="yes" value="yes" />);

storiesOf('Avatar', module)
  .add('Avatar', () => <Avatar />)
  .add('Avatar icon', () => <AvatarIcon width="41" height="41" />)
  .add('Avatar name', () => <Name text="Larry Fleming" />)
  .add('Avatar position', () => <Position text="Manager" />);

storiesOf('Status', module)
  .add('Status', () => <Status />)
  .add('Status active', () => <Status active />)
  .add('StatusFilter', () => <StatusFilter text="Opened" sent />);

storiesOf('Input', module).add('Input', () => <Input labelText="First Name" placeholder="For example" />);

storiesOf('Textarea', module).add('Textarea', () => <Textarea labelText="Summary" placeholder="For example" />);

storiesOf('Dropdown', module).add('Dropdown', () => <Dropdown placeholder="Name of different email template" />);

storiesOf('Table', module).add('TableAnalitics', () => <TableAnalitics />);

storiesOf('Form', module).add('FormNewDeal', () => <FormNewDeal />);

storiesOf('Page', module).add('EmptyPageDeals', () => <PageEmptyDeal />);

storiesOf('Card', module).add('Card', () => <Card />);

storiesOf('Box', module)
  .add('BoxItem', () => (
    <BoxItem countCards={234} title="Hot prospects" subtitle="Contacts" user="Anant Jain" date="Jun 12, 2019" />
  ))
  .add('BoxPage', () => <BoxPage />)
  .add('BoxEmptyPage', () => <BoxEmptyPage />)
  .add('FormNewCompany', () => <FormNewCompany />)
  .add('FormNewContact', () => <FormNewContact />);
