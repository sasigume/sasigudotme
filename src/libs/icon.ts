import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faHtml5, faCss3Alt, faGitAlt, faWordpress, faJsSquare, faReact, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, faPen, faBorderAll, faUser, faDizzy, faSmile, faGrinBeam, faGrinHearts, faCheckSquare, faImages, faFilm} from '@fortawesome/free-solid-svg-icons'

export default function addIcon() {
  library.add(faGithub, faHtml5, faCss3Alt, faGitAlt, faWordpress, faJsSquare, faReact, faYoutube, faExternalLinkAlt, faPen, faBorderAll, faUser, faDizzy, faSmile, faGrinBeam, faGrinHearts, faCheckSquare, faImages, faFilm)
}