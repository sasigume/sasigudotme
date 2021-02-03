import { CONST_MYNAME, CONST_REPO_URL, CONST_BLOG_URL, CONST_YOUTUBE_URL } from '../../options/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="z-50 bg-gray-800 w-screen lg:fixed bottom-0 left-0 py-4 px-10 flex flex-row justify-between">
      <div><a
        href={CONST_REPO_URL}
        className="inline hover:underline"
      >
        <FontAwesomeIcon className="w-4 mr-1 inline" icon={['fab', 'github']} />View on GitHub
            </a>
      </div>
      <div><a
        href={CONST_YOUTUBE_URL} target="_blank"
        className="inline hover:underline"
      >
        <FontAwesomeIcon className="w-4 mr-1 inline" icon={['fab', 'youtube']} />YouTube
            </a>
      </div>
      <div><a
        href={CONST_BLOG_URL} target="_blank"
        className="inline hover:underline"
      >
        <FontAwesomeIcon className="w-4 mr-1 inline" icon={['fas', 'pen']} />Hatena Blog
            </a>
      </div>
    </footer>
  )
}
