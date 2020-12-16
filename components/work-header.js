import Avatar from '@/components/avatar'
import DateComponent from '@/components/date'
import CoverImage from '@/components/cover-image'

export default function WorkHeader({ title, coverImage, date, url, creator }) {
  return (
    <>
      <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12">
      {title}
      </h1>
      <div className="hidden md:block md:mb-12">
        {creator && <Avatar name={creator.name} picture={creator.picture} twitter={creator.twitter} />}
      </div>
      <div className="mb-6 md:mb-12 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <a target="_blank" href={url} className="flex text-2xl bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-6 justify-center duration-200 transition-colors mb-6 lg:mb-0">
          VIEW THIS WORK &rarr;
          </a>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {creator && <Avatar name={creator.name} picture={creator.picture} twitter={creator.twitter} />}
        </div>
        <div className="mb-6 text-lg">
          <DateComponent dateString={date} />
        </div>
      </div>
    </>
  )
}
