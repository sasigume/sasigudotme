import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button({path, label, iconStyle, iconName}) {
    return(
    <Link href={path}>
      <a className="inline-block mr-0 md:mr-8 last:mr-0 my-2 md:my-4 no-underline p-4 border-2 transition duration-300 border-gray-100 hover:border-gray-500 rounded-lg">
        <b className="block font-bold text-xl">
          <FontAwesomeIcon className="w-5 mr-2 mb-1 inline" icon={[iconStyle, iconName]}/>{label}</b>
      </a>
    </Link>
    )
}