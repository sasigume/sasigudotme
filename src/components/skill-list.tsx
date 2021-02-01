import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function SkillButton({label, iconStyle, iconName, level}) {
  return (
      <div className={(`w-20 h-20 flex justify-center align-middle items-center shadow-lg font-bold ml-4 my-2 no-underline ${"bg-level-" + level}`)}>
      <FontAwesomeIcon className="text-icon" icon={[iconStyle, iconName]}/>
      </div>
    )
};

export function SkillMenu({buttons}) {
  return (
      <div className="flex flex-wrap justify-end">
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
