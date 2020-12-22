import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'
import Link from 'next/link'

type chapterProps = {
  name: string,
  count: number[]
}

type progressProps = {
  number: number[]
}

export function Progress({number}:progressProps) {
  const redPercent = number[0] == 0 ? 0 : (number[0]/number[1])*100 
  const blackPercent = number[2] == 0 ? 0 : (number[2]/number[3])*100
  console.log(redPercent,blackPercent)
  return (
    <div className="overflow-hidden shadow-lg">
      <div className="bg-gray-500 rounded-t-lg w-full shadow-lg">
        <div className="bg-blue-600 rounded-tl-lg" style={{ width: (`${redPercent}%`) }}>
          <span className="text-white block whitespace-nowrap px-2 py-3">基本問題: {number[0]}/{number[1]}</span></div>
      </div>
      <div className="bg-gray-500 rounded-b-lg w-full shadow-lg">
        <div className="bg-red-600 rounded-bl-lg" style={{ width: (`${blackPercent}%`) }}>
          <span className="text-white block whitespace-nowrap px-2 py-3">応用問題: {number[2]}/{number[3]}</span></div>
      </div>
    </div>
  )
}

export function ChapterEL({ name, count }: chapterProps) {
  const rate = (count[0] + count[2]) / (count[1] + count[3])
  const percent = Math.floor(rate * 1000) / 10
  return (
    <div className="p-4 rounded-xl bg-white overflow-hidden">
      <h3 className="text-2xl mb-3 font-bold border-l-4 pl-3 border-gray-600">{name} ({percent}%)</h3>
      <Progress number={count} />
    </div>
  )
}

export function BookData({ data }) {
  return (
    <div className="font-bold">
      <div className="grid grid-cols-1 gap-y-2">
        {data.map((chapter) => (
          <ChapterEL
            key={chapter.name}
            name={chapter.name}
            count={chapter.count}
          />
        ))}
      </div>
    </div>
  )
};

export function BookEl({ slug, title, show, subjects, count, percent }) {
  const subjectList = subjects.map((subject) => (
    <div key={subject} className="inline-block mr-2 px-3 py-2 bg-gray-300 rounded-md">{subject}</div>
  ))
  return (
    <Link href={(`/books/${slug}`)}>
      <a>
        <div id={slug} className={cn('hover:shadow-xl transition duration-300 font-bold bg-sasibg shadow-lg py-6 px-4 rounded-lg', {
          "hidden": !show
        })}>
          <div>

            <h2><FontAwesomeIcon className="w-5 mr-2 mb-2 inline" icon={['fas', 'book']} />{title} (達成度: {percent}%)</h2>

            <div className="flex flex-nowrap my-3">{subjectList}</div>
            <Progress number={count} />
          </div>
        </div>
      </a>
    </Link>
  )
};

export function BookMenu({ books }) {
  return (
    <div className="grid gric-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
      {books.map((book) => (
        <BookEl
          key={book.id}
          slug={book.slug}
          title={book.title}
          show={book.show}
          subjects={book.subjects}
          count={book.count}
          percent={book.percent}
        />
      ))}
    </div>
  )
};
