import React, { Component } from 'react';
import styles from './History.module.scss';
import HistoryItemEmail from './HistoryItemEmail';
import HistoryItemText from './HistoryItemText';
import HistoryItemCallNotes from './HistoryItemCallNotes';
import HistoryItemDeal from './HistoryItemDeal';
import HistoryItemQuotes from './HistoryItemQuotes';
import HistoryItemAttachments from './HistoryItemAttachments';
import HistoryItemStage from './HistoryItemStage';

class HistoryList extends Component {
  render() {
    const { children } = this.props;

    return (
      <ul className={styles.historyList}>
        <HistoryItemEmail
          title="Thanks for the updated Kevin"
          text="it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many"
          info="to Enrique L. Proper from Steven M. White"
          date="Last update 2h ago, Today"
        />
        <HistoryItemText
          text="Can’t talk til later today - call me around 6"
          info="to Pansy R. Storey from Enrique L. Proper"
          date="03:15:25 PM, Jun 26, 2019"
        />
        <HistoryItemCallNotes
          text="We spoke about three options for redoing both kitchens."
          info="to Pansy R. Storey from Steven M. White"
          date="02:10:12 PM, Jun 25, 2019"
        />
        <HistoryItemDeal
          text="Ui and Ux designer for team task manager"
          info="to Ernest K. Greenhill from Steven M. White"
          date="09:10:22 PM,  Jun 27, 2019"
        />
        <HistoryItemQuotes
          text="Quotes"
          info="to Ernest K. Greenhill from Pansy R. Storey"
          date="01:16:22 PM,  Jun 28, 2019"
        />
        <HistoryItemAttachments
          text="Attachments"
          info="to Ernest K. Greenhill from Pansy R. Storey"
          date="01:16:22 PM,  Jun 28, 2019"
        />
        <HistoryItemStage
          text="Stage"
          info="to Ernest K. Greenhill from Pansy R. Storey"
          date="01:16:22 PM,  Jun 28, 2019"
        />
      </ul>
    );
  }
}

export default HistoryList;
