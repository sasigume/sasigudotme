// https://dev.to/vtrpldn/how-to-make-an-extremely-reusable-tooltip-component-with-react-and-nothing-else-3pnk

import React, { useState } from "react";

export const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 0);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  let direction
  if (props.direction == 'top') {
    direction = "-top-6"
  } if (props.direction == 'bottom') {
    direction = "-bottom-6"
  }
  else {
    direction = "-top-6"
  }


  return (
    <div
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      className="relative"
    >
      {props.children}
      {active && (
        <div className={`${direction} z-30 whitespace-nowrap shadow-lg absolute bg-gray-700 p-3 text-left uppercase font-bold`}>
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  )
};

export default Tooltip;
