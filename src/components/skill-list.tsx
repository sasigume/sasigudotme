import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Tooltip from './tooltip'
import {Skill} from '../services'

export function SkillButton({ label, iconStyle, iconName, level, type, power, description, start, lastUsed }) {

  return (
    <Tooltip label={label} level={level} type={type} power={power} description={description} start={start} lastUsed={lastUsed}>
      <div className={(`p-2 flex justify-center align-middle items-center shadow-lg ml-4 mb-4 no-underline ${"bg-level-" + level}`)}>
        <FontAwesomeIcon className="w-16 h-16" icon={[iconStyle, iconName]} />
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
