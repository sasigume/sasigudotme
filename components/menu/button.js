import Link from 'next/link'

export default function Button({path, label, text}) {
    return(
    <Link href={path}>
      <a className="block mx-4 my-2 md:my-4 flex-auto no-underline p-4 border-2 transition duration-300 border-gray-100 hover:border-gray-500 rounded-lg">
        <b className="block font-bold text-xl mb-4">{label} &rarr;</b>
        <span>{text}</span>
      </a>
    </Link>
    )
}