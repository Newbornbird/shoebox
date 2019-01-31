/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button/Button';
import ButtonIcon from '../components/Button/ButtonIcon';
import Arrows from '../components/Button/Arrows';
import ButtonArrow from '../components/Button/ButtonArrow';
import Range from '../components/Range/Range';
import Checkbox from '../components/Checkbox/Checkbox';
import RadioBtn from '../components/RadioBtn/RadioBtn';
import AvatarIcon from '../components/Avatar/AvatarIcon';
import './welcome';

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

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
  .add('ArrowsPrev', () => <Arrows arrows />)
  .add('ArrowsNext', () => <Arrows arrows arrowsNext />)
  .add('ArrowsDisabled', () => <Arrows arrows arrowsNext arrowsDisabled />)
  .add('ButtonArrow', () => <ButtonArrow btnArrow text="+ Add contact" />)
  .add('ButtonArrowDisabled', () => <ButtonArrow disabled btnArrowDisabled text="+ Add contact" />);

storiesOf('Range', module).add('Range', () => <Range />);

storiesOf('Checkbox', module).add('Checkbox', () => <Checkbox text="Added to campaign" />);

storiesOf('Radio', module).add('Radio', () => <RadioBtn fieldYes="Yes" fieldNo="No" />);

storiesOf('Avatar', module).add('Avatar icon', () => <AvatarIcon width='41' height='41' />);
