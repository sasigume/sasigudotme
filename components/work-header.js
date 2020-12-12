import Avatar from '@/components/avatar'
import DateComponent from '@/components/date'
import CoverImage from '@/components/cover-image'
import WorkTitle from '@/components/work-title'

export default function WorkHeader({ title, coverImage, date, creator }) {
  return (
    <>
      <WorkTitle>{title}</WorkTitle>
      <div className="hidden md:block md:mb-12">
        {creator && <Avatar name={creator.name} picture={creator.picture} twitter={creator.twitter} />}
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
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
