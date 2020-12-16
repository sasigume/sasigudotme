import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Button({path, label, iconStyle, iconName}) {
  return (
      <Link href={path}>
      <a  target="_blank" className="block mr-0 md:mx-1 my-1 md:my-4 no-underline pt-3 pb-2 px-4 border-2 transition duration-300 border-gray-100 hover:border-gray-500 rounded-lg">
        <b className="block text-sm">
          <FontAwesomeIcon className="w-5 mr-2 mb-1 inline" icon={[iconStyle, iconName]}/>{label}</b>
      </a>
      </Link>
    )
};
export function SkillButton({label, iconStyle, iconName, level}) {
  return (
      <div className={(`inline-block mr-2 my-2 no-underline pt-3 pb-2 px-4 border-2 border-gray-100 rounded-lg ${"bg-level" + level}`)}>
        <b className="block text-md">
          <FontAwesomeIcon className="w-5 mr-2 mb-1 inline" icon={[iconStyle, iconName]}/>{label}</b>
      </div>
    )
};

export function SkillMenu({buttons}) {
  return (
      <div className="flex flex-wrap justify-center">
      {buttons.map(button => (
        <SkillButton
        key={button.label}
        iconStyle={button.iconStyle}
        iconName={button.iconName}
        label={button.label ?? ''}
        level={button.level ?? ''}
      />
      ))}
      </div>
    )
};
export function Menu({buttons}) {
  return(
  <div className="flex flex-col justify-center md:flex-row my-4">
    {buttons.map(button => (
      <Button
        key={button.path}
        path={button.path}
        iconStyle={button.iconStyle}
        iconName={button.iconName}
        label={button.label ?? ''}
      />
    ))}
  </div>
  )
};
