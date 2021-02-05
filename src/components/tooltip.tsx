// https://dev.to/vtrpldn/how-to-make-an-extremely-reusable-tooltip-component-with-react-and-nothing-else-3pnk

import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'

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
      <div className="flex">
        {props.children}
      </div>
      {active && (
        <div className={cn('absolute border-t border-black top-0 z-50 w-64 shadow-xl bg-white text-left', {
          'ml-4 left-24': !props.left,
          'mr-4 md:mr-0 md:ml-4 -left-64 md:left-24': props.left,
          '-left-0 top-10': props.top
        })}>

          <div className={(`py-2 px-3 text-xl bg-black text-white ${"bg-level-" + props.level}`)}>
            <div className="font-bold">{props.label ? props.label : 'INFO'}</div>
            <div className="uppercase">{props.level ? `LEVEL${props.level}` : ''} {props.type ? props.type : ``}</div>
          </div>
          <div className="py-1 px-3">
            <div className="flex items-center">
              {props.type && <div className="w-8 mr-2">
                <FontAwesomeIcon icon={['fas', typeIcon]} />
              </div>}
              <div className="text-5xl font-bold">{props.power}</div>
            </div>

            <div>{props.description}</div>
          </div>
          {(props.start || props.lastUsed) && (<>
            <div className=" border-t border-gray-600 pt-1 pb-3 px-3">

              {props.start && (<>
              <>USING SINCE</>
              <div className="text-gray-800">{props.start}</div>
              </>)}
              {props.lastUsed && (<>
              <div>LAST USED</div>
              <div className="text-gray-800">{props.lastUsed}</div>
              </>)}
            </div>
          </>
          )}
        </div>
      )}</div>
  )
};

export default Tooltip;
