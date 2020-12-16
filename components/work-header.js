import Avatar from '@/components/avatar'
import DateComponent from '@/components/date'
import CoverImage from '@/components/cover-image'

export default function WorkHeader({ title, coverImage, date, url, creator }) {
  return (
    <>
      <h1 className="text-4xl md:text-5xl mt-12 mb-8">
      {title}
      </h1>
      <div className="hidden md:block md:mb-12">
        {creator && <Avatar name={creator.name} picture={creator.picture} twitter={creator.twitter} />}
      </div>
      <div className="mb-6 md:mb-12 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <a target="_blank" href={url} className="flex text-xl bg-black hover:bg-white hover:text-black border border-black text-white py-4 justify-center duration-200 transition-colors mb-0">
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
