import React, { Component } from 'react';
import Header from '../Header/Header';
import TitleSection from '../TitleSection/TitleSection';
import TableAnalitics from '../TableAnalitics/TableAnalitics';
import RowTableAnalitics from '../TableAnalitics/RowTableAnalitics';
import Button from '../Button/Button';
import FilterHistory from '../History/FilterHistory';
import FilterTasks from '../TasksEvents/FilterTasks';
import Card from '../Card/Card';
import TaskList from '../TasksEvents/TaskList';
import HistoryList from '../History/HistoryList';
import styles from './PageEmptyDeal.module.scss';

class PageEmptyDeal extends Component {
  render() {
    const { style } = this.props;
    return (
      <div>
        <Header />
        <div className={styles.containerContent}>
          <TitleSection text="Analytics" />
          <TableAnalitics>
            <RowTableAnalitics titleRow="My averages" call={87} emails={4} email={4} progressions={4} connects={6} />
            <RowTableAnalitics titleRow="Team averages" call={17} emails={5} email={8} progressions={3} connects={2} />
          </TableAnalitics>
          <TitleSection text="Deal" />
          <Button text="+ Add new deal" />
          <Card />
          <div style={{ display: 'flex' }}>
            <div className={styles.dealHistory}>
              <TitleSection text="History " />
              <Button text="+ Add" />
              <FilterHistory />
              <HistoryList />
            </div>
            <div className={styles.dealTasks}>
              <TitleSection text="Tasks/Events" />
              <Button text="+ Add" />
              <FilterTasks />
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageEmptyDeal;
