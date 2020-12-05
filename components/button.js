export default function Button({url, label, text}) {
    return(
        <a href={url} className="m-4 flex-auto no-underline p-4 border-2 transition duration-300 border-gray-100 hover:border-gray-500 rounded-lg">
      <h3 className="font-bold text-xl mb-4">{label} &rarr;</h3>
      <p>{text}</p>
    </a>
    )
}