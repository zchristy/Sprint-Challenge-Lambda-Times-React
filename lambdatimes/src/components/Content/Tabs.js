import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
const Tabs = props => {
  const { tabs, selectTabHandler, selectedTab } = props;

  const tab = tabs.map((tab, i) => {
    return <Tab
              key={i}
              selectTabHandler={selectTabHandler}
              selectedTab={selectedTab}
              tab={tab}
            />

  });

  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {tab}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired
}
export default Tabs;

/* map over the tabs provided on your props, create a new Tab component for each one.
    give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
