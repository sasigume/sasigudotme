import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Tooltip from './tooltip'
import {Skill} from '../services'

export function SkillButton({ label, iconStyle, iconName, level, type, power, description, start, lastUsed }) {

  return (
    <Tooltip label={label} level={level} type={type} power={power} description={description} start={start} lastUsed={lastUsed}>
      <div className={(`w-20 h-20 flex justify-center align-middle items-center shadow-lg ml-4 my-2 no-underline ${"bg-level-" + level}`)}>
        <FontAwesomeIcon className="p-3" icon={[iconStyle, iconName]} />
      </div>
    </Tooltip >
  )
};

type SkillMenuProps = {
  buttons: Skill[]
}

export function SkillMenu({ buttons }:SkillMenuProps) {
  return (
    <div className="flex flex-wrap">
      {buttons.map((button) => (
        <SkillButton
          key={button.label}
          type={button.type}
          iconStyle={button.iconStyle}
          iconName={button.iconName}
          label={button.label}
          level={button.level}
          power={button.power}
          description={button.description}
          start={button.start}
          lastUsed={button.lastUsed}
        />
      ))}
    </div>
  )
};
