import { CONST_RESUME_URL, CONST_REPO_URL, CONST_BLOG_URL, CONST_YOUTUBE_URL } from '../../options/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@contentful/rich-text-types'

function FooterLink({label, href, iconStyle, iconName}) {
  return (
    <div>
      <a href={href} className="my-1 md:my-0 flex items-center md:flex-row hover:underline">
        <FontAwesomeIcon className="w-4 mr-2 inline" icon={[iconStyle, iconName]} />{label}
      </a>
    </div>
  )
}

const FooterLinkList = [
  {
    label: "GitHub",
    href: CONST_REPO_URL,
    iconStyle: "fab",
    iconName: "github"
  },
  {
    label: "YouTube",
    href: CONST_YOUTUBE_URL,
    iconStyle: "fab",
    iconName: "youtube"
  },
  {
    label: "Hatena Blog",
    href: CONST_BLOG_URL,
    iconStyle: "fas",
    iconName: "pen"
  },
  {
    label: "Resume",
    href: CONST_RESUME_URL,
    iconStyle: "fas",
    iconName: "code"
  }
]

export default function Footer() {
  return (
    <footer className="z-0 bg-gray-800 w-screen fixed bottom-0 left-0 py-4 px-10 lg:px-40 flex flex-col md:flex-row items-center justify-between">
      {
        FooterLinkList.map((link) => (
        <FooterLink
          key={link.label}
          label={link.label}
          href={link.href}
          iconStyle={link.iconStyle}
          iconName={link.iconName}
        />
        ))
      }
    </footer>
  )
}
