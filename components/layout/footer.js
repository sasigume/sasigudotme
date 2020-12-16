import Container from '@/components/container'
import {CONST_REPO_URL} from '@/libs/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-100 border-t border-gray-400">
      <Container>
        <div className="py-14 flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <a
              href={CONST_REPO_URL}
              className="mx-3 hover:underline"
            >
              <FontAwesomeIcon className="w-4 mb-1 mr-1 inline" icon={['fab', 'github']} />View on GitHub
            </a>
            <span className="mx-3">&copy; sasigume 2020</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
