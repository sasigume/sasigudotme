import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faFacebook, faHtml5, faCss3Alt, faGitAlt, faWordpress, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, faBook, faBorderAll, faUser, faDizzy, faSmile, faGrinBeam, faGrinHearts, faCheckSquare, faImages, faFilm, faSchool, faClock, faRss} from '@fortawesome/free-solid-svg-icons'

export default function addIcon() {
  library.add(faGithub, faTwitter, faFacebook, faHtml5, faCss3Alt, faGitAlt, faWordpress, faJsSquare, faReact, faExternalLinkAlt, faBook, faBorderAll, faUser, faDizzy, faSmile, faGrinBeam, faGrinHearts, faCheckSquare, faImages, faFilm, faSchool, faClock, faRss)
}