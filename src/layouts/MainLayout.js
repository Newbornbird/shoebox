import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';

class MainLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
