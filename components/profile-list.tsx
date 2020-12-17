import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Profile({label, date, iconStyle, iconName}) {
  return (
      <li className="mb-4">
        <b className="block text-md">
          <FontAwesomeIcon className="w-5 mr-2 mb-1 inline" icon={[iconStyle, iconName]}/>{date} : {label}</b>
      </li>
    )
};

export function ProfileList({profiles}) {
  return (
      <ul className="list-none">
      {profiles.map((profile) => (
        <Profile
        key={profile.slug}
        label={profile.label}
        iconStyle={profile.iconStyle}
        iconName={profile.iconName}
        date={profile.date}
      />
      ))}
      </ul>
    )
};
