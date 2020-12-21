import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function SkillButton({label, iconStyle, iconName, level}) {
  return (
      <div className={(`shadow-lg inline-block font-bold italic mr-2 my-2 no-underline pt-3 pb-2 px-4 rounded-lg ${"bg-level-" + level}`)}>
      <FontAwesomeIcon className="w-5 mr-2 mb-1 inline" icon={[iconStyle, iconName]}/>{label}
      </div>
    )
};

export function SkillMenu({buttons}) {
  return (
      <div className="flex flex-wrap">
      {buttons.map((button) => (
        <SkillButton
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
