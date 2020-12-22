import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'

type chapterPprops = {
  name: string,
  count: number[]
}

export function ChapterEL({ name, count }: chapterPprops) {
  const rate = (count[0] + count[2]) / (count[1] + count[3])
  return (
    <div className="p-4 rounded-xl bg-white">
      <h3>{name}</h3>
      <span>達成度: {rate * 100}%</span>
      <div className="bg-gray-500 w-full">
        <div className="bg-blue-600" style={{width:(`${count[0]}%`)}}>
          <span className="text-white block whitespace-nowrap p-2">基本問題: {count[0]}/{count[1]}</span></div>
      </div>
      <div className="bg-gray-500 w-full">
        <div className="bg-red-600" style={{width:(`${count[2]}%`)}}>
          <span className="text-white block whitespace-nowrap p-2">応用問題: {count[2]}/{count[3]}</span></div>
      </div>
    </div>
  )
}

export function BookEl({ slug, title, show, subjects, data }) {
  const subjectList = subjects.map((subject) => (
    <div className="inline-block mr-2 px-3 py-1 bg-gray-300 rounded-md">{subject}</div>
  ))
  return (
    <div id={slug} className={cn('bg-sasibg shadow-lg font-bold mr-2 my-2 no-underline pt-3 pb-2 px-4 rounded-lg', {
      "hidden": !show
    })}>
      <h2><FontAwesomeIcon className="w-5 mr-2 mb-1 inline" icon={['fas', 'book']} />{title}</h2>
      <div className="flex flex-nowrap my-2">{subjectList}</div>
      <div className="grid grid-cols-1 gap-y-2">
        {data.map((chapter) => (
          <ChapterEL
            name={chapter.name}
            count={chapter.count}
          />
        ))}
      </div>
    </div>
  )
};

export function BookMenu({ books }) {
  return (
    <div className="">
      {books.map((book) => (
        <BookEl
          key={book.id}
          slug={book.slug}
          title={book.title}
          show={book.show}
          subjects={book.subjects}
          data={book.data}
        />
      ))}
    </div>
  )
};
