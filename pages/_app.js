import '../styles/globals.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, faBook, faBorderAll} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faExternalLinkAlt, faBook, faBorderAll)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
