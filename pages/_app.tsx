import type { AppProps } from 'next/app'

import '../styles/globals.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faFacebook, faHtml5, faCss3Alt, faGitAlt, faWordpress, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, faBook, faBorderAll, faUser, faDizzy, faSmile, faGrinBeam, faGrinHearts, faCheckSquare, faImages, faFilm} from '@fortawesome/free-solid-svg-icons'
library.add(faGithub, faTwitter, faFacebook, faHtml5, faCss3Alt, faGitAlt, faWordpress, faJsSquare, faReact, faExternalLinkAlt, faBook, faBorderAll, faUser, faDizzy, faSmile, faGrinBeam, faGrinHearts, faCheckSquare, faImages, faFilm)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
