import React, { Component } from 'react';
import styles from './TitleSection.module.scss'; // Import css modules stylesheet as styles

class TitleSection extends Component {
  render() {
    const { text } = this.props;

    return <h2 className={styles.titleSection}>{text}</h2>;
  }
}

export default TitleSection;
