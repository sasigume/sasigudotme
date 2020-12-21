import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactMarkdown from 'react-markdown'

function Ul(props) {
  return <ul className="ml-4 my-2 list-disc">{props.children}</ul>
}

export function Profile({slug, title, content, iconStyle, iconName }) {
  const parsedContent = (
    <ReactMarkdown children={content} renderers={{ list: Ul }} />
  )
  return (
    <div id={slug} className="bg-sasibg rounded-xl shadow-xl px-6 pt-8 pb-6">
      <div className="mb-2 font-bold text-lg"><FontAwesomeIcon className="w-5 mr-2 mb-1 inline" icon={[iconStyle, iconName]} />{title}</div>
      <div>{parsedContent}</div>
    </div>
  )
};

export function ProfileList({ profiles }) {
  return (
    <div className="z-10 grid grid-row-1 gap-y-6">
      {profiles.map((profile) => (
        <Profile
          key={profile.id}
          slug={profile.slug}
          title={profile.title}
          content={profile.content}
          iconStyle={profile.iconStyle}
          iconName={profile.iconName}
        />
      ))}
    </div>
  )
};