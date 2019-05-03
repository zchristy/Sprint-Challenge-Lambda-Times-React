import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  const { tab, selectedTab, selectTabHandler} = props;

  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/
  const tabClass = () => {
    if(tab === selectedTab) {
      return 'tab active-tab'
    } else {
      return 'tab'
    }
  }

  return (
    <div
      className={tabClass()}
      onClick={(e) => {
        selectTabHandler(tab)}}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired
}
export default Tab;
/* Replace this dummy click handler function with your selectTabHandler function from props
 you'll need to pass the `tab` in as an argument to this handler. */
