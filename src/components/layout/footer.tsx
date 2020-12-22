import Container from '../container'
import { CONST_MYNAME, CONST_REPO_URL} from '../../libs/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="mt-auto">
      <Container>
        <div className="my-14 mx-auto max-w-md text-center grid grid-cols-1 md:grid-cols-3 gap-x-1 gap-y-4">
          <div><a
            href={CONST_REPO_URL}
            className="inline hover:underline"
          >
            <FontAwesomeIcon className="w-4 mb-1 mr-1 inline" icon={['fab', 'github']} />View on GitHub
            </a></div>
          <div><a
            href="/rss.xml"
            className="inline hover:underline"
          >
            <FontAwesomeIcon className="w-4 mb-1 mr-1 inline" icon={['fas', 'rss']} />RSS
            </a>
          </div>
          <span className="">&copy; {CONST_MYNAME} 2020</span>
        </div>
      </Container>
    </footer>
  )
}
