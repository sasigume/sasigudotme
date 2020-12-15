import '../styles/globals.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faExternalLinkAlt)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
