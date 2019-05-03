import React from 'react';

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
      onClick={(tab) => {
        selectTabHandler
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
/* Replace this dummy click handler function with your selectTabHandler function from props
 you'll need to pass the `tab` in as an argument to this handler. */
