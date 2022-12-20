/* global Headway */
import React, { memo } from 'react';

const HW_CONFIG_ACCOUNT = 'JVB0PJ'; // get this from env-variables
const ELEMENT_ID = 'headway-updates-widget';

function HeadwayWidget() {
  // No need to render if no account is configured
  if (!HW_CONFIG_ACCOUNT) {
    return null;
  }

  // Use a function ref to determine if the DOM is ready for init
  const initWidget = (element) => {
    if (element) {
      Headway.init({
        selector: `#${ELEMENT_ID}`,
        account: HW_CONFIG_ACCOUNT,
      });
    }
  };

  return <div id={ELEMENT_ID} ref={initWidget} />;
}

// prevent too much re-rendering with memo
export default memo(HeadwayWidget);
