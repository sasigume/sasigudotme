import Container from '../container'
import { CONST_MYNAME, CONST_REPO_URL, CONST_BLOG_URL, CONST_YOUTUBE_URL} from '../../libs/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="mt-auto">
      <Container>
        <div className="my-14 mx-auto text-center flex flex-col leading-10 md:flex-row justify-around">
          <div><a
            href={CONST_REPO_URL}
            className="inline hover:underline"
          >
            <FontAwesomeIcon className="w-4 mb-1 mr-1 inline" icon={['fab', 'github']} />View on GitHub
            </a>
          </div>
          <div><a
            href={CONST_YOUTUBE_URL} target="_blank"
            className="inline hover:underline"
          >
            <FontAwesomeIcon className="w-4 mb-1 mr-1 inline" icon={['fab', 'youtube']} />YouTube
            </a>
          </div>
          <div><a
            href={CONST_BLOG_URL} target="_blank"
            className="inline hover:underline"
          >
            <FontAwesomeIcon className="w-4 mb-1 mr-1 inline" icon={['fas', 'pen']} />Hatena Blog
            </a>
          </div>
          <span className="md:col-span-3">&copy; {CONST_MYNAME} 2021</span>
        </div>
      </Container>
    </footer>
  )
}
