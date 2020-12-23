import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

import markdownStyles from './markdown-styles.module.css'

type chapterProps = {
  name: string,
  countC: number[]
}

type progressProps = {
  number: number[]
}

function Ul(props) {
  return <ul className="ml-4 my-2 list-disc">{props.children}</ul>
}

export function Progress({number}:progressProps) {
  const redPercent = number[0] == 0 ? 0 : (number[0]/number[1])*100 
  const bluePercent = number[2] == 0 ? 0 : (number[2]/number[3])*100
  return (
    <div className="overflow-hidden shadow-lg">
      <div className="bg-gray-600 rounded-t-lg w-full shadow-lg">
        <div className={cn('bg-red-600',{
          'rounded-tl-lg': redPercent !== 100,
          'rounded-t-lg': redPercent == 100
        })} style={{ width: (`${redPercent}%`) }}>
          <span className="text-white block whitespace-nowrap px-2 py-3">基本問題: {number[0]}/{number[1]}</span></div>
      </div>
      <div className="bg-gray-800 rounded-b-lg w-full shadow-lg">
        <div className={cn('bg-blue-600 rounded-bl-lg',{
          'rounded-bl-lg': bluePercent !== 100,
          'rounded-b-lg': bluePercent == 100
        })} style={{ width: (`${bluePercent}%`) }}>
          <span className="text-white block whitespace-nowrap px-2 py-3">応用問題: {number[2]}/{number[3]}</span></div>
      </div>
    </div>
  )
}

export function ChapterEL({ name, countC }: chapterProps) {
  let rate
  if (countC[1] == 0 && countC[3] == 0) {
    rate = 0
  } else {
    rate = (countC[0] + countC[2]) / (countC[1] + countC[3])
  }
  const percent = Math.floor(rate * 1000) / 10
  return (
    <div className="my-3 rounded-lg bg-white overflow-hidden">
      <h3 className="text-2xl my-3 pl-3 border-l-4 border-gray-600">{name} ({percent}%)</h3>
      <Progress number={countC} />
    </div>
  )
}

export function BookData({ chapters }) {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-y-2">
        {chapters.map((chapter) => (
          <ChapterEL
            key={chapter.name}
            name={chapter.name}
            countC={chapter.count}
          />
        ))}
      </div>
    </div>
  )
};

export function BookEl({ slug, title, show, subjects, md, count, percent }) {
  const subjectList = subjects.map((subject) => (
    <div key={subject} className="inline-block mr-2 mb-2 px-3 py-2 bg-gray-300 rounded-md">{subject}</div>
  ))
  const parsedMd = (
    <ReactMarkdown children={md} renderers={{ list: Ul }} />
  )
  return (
    <Link href={(`/books/${slug}`)}>
      <a>
        <div id={slug} className={cn('hover:shadow-xl transition duration-300 bg-sasibg shadow-lg py-6 px-4 rounded-lg', {
          "hidden": !show
        })}>
          <div>

            <h2 className="text-xl font-bold"><FontAwesomeIcon className="w-5 mr-2 mb-1 inline" icon={['fas', 'book']} />{title}<br />(達成度: {percent}%)</h2>

            <div className="flex flex-wrap my-3">{subjectList}</div>
            <div className={(`my-3, ${markdownStyles.markdown}`)}>{parsedMd}</div>
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
          md={book.md}
          show={book.show}
          subjects={book.subjects}
          count={book.count}
          percent={book.percent}
        />
      ))}
    </div>
  )
};
