// https://dev.to/vtrpldn/how-to-make-an-extremely-reusable-tooltip-component-with-react-and-nothing-else-3pnk

import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

  let typeIcon: any = 'burn'
  if (props.type == 'code') { typeIcon = 'code' }
  if (props.type == 'language') { typeIcon = 'globe' }

  return (
    <div
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      className="relative"
    >
      {props.children}
      {active && (
        <div className="border-t border-white left-10 -bottom-30 z-30 whitespace-nowrap shadow-xl absolute bg-gray-900 text-left">
          <div className={(`py-2 px-3 text-xl ${"bg-level-" + props.level}`)}>
            <div className="font-bold">{props.label}</div>
            <div className="uppercase">LEVEL {props.level} {props.type}</div>
          </div>
          <div className="py-1 border-b border-gray-600 px-3">
            <div className="flex items-center">
              <div className="w-8 mr-2">
                <FontAwesomeIcon icon={['fas', typeIcon]} />
              </div>
              <div className="text-5xl font-bold">{props.power}</div>
            </div>
            <div>{props.description}</div>
          </div>
          <div className="pt-1 pb-3 px-3">
            <div>START</div>
            {props.start}
            <div>LAST USED</div>
            {props.lastUsed}
          </div>
        </div>
      )}
    </div>
  )
};

export default Tooltip;
