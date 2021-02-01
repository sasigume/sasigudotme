import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Tooltip from './tooltip'
import {Skill} from '../services'

export function SkillButton({ direction, label, iconStyle, iconName, level }) {

  return (
    <Tooltip content={label} direction={direction}>
      <div className={(`w-20 h-20 flex justify-center align-middle items-center shadow-lg font-bold ml-4 my-2 no-underline ${"bg-level-" + level}`)}>
        <FontAwesomeIcon className="p-3" icon={[iconStyle, iconName]} />
      </div>
    </Tooltip >
  )
};

type SkillMenuProps = {
  direction: string,
  buttons: Skill[]
}

export function SkillMenu({ direction, buttons }:SkillMenuProps) {
  return (
    <div className="flex flex-wrap">
      {buttons.map((button) => (
        <SkillButton
          direction={direction}
          key={button.label}
          iconStyle={button.iconStyle}
          iconName={button.iconName}
          label={button.label}
          level={button.level}
        />
      ))}
    </div>
  )
};
