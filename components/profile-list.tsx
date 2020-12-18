import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactMarkdown from 'react-markdown'

function Ul(props) {
  return <ul className="ml-4 my-2 list-disc">{props.children}</ul>
}

export function Profile({ label, date, iconStyle, iconName }) {
  const parsedLabel = (
    <ReactMarkdown children={label} renderers={{ list: Ul }} />
  )
  return (
    <div className="bg-white rounded-xl shadow-xl p-6">
      <div className="mb-2"><FontAwesomeIcon className="w-5 mr-2 mb-1 inline" icon={[iconStyle, iconName]} />{date}</div>
      <div>{parsedLabel}</div>
    </div>
  )
};

export function ProfileList({ profiles }) {
  return (
    <div className="z-10 grid grid-row-1 gap-y-6">
      {profiles.map((profile) => (
        <Profile
          key={profile.slug}
          label={profile.label}
          iconStyle={profile.iconStyle}
          iconName={profile.iconName}
          date={profile.date}
        />
      ))}
    </div>
  )
};