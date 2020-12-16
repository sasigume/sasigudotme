import React from 'react'

import '../styles/globals.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, faBook, faBorderAll, faUser, faDizzy, faSmile, faGrinBeam, faGrinHearts} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faExternalLinkAlt, faBook, faBorderAll, faUser, faDizzy, faSmile, faGrinBeam, faGrinHearts)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
