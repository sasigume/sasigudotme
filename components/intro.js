import {CONST_REPO_URL, CONST_SITE_URL, CONST_SITE_NAME, CONST_TWITTER_URL, CONST_YOUTUBE_URL, CONST_LAPRAS_URL} from '@/libs/constants'
import Button from '@/components/button'
export default function Intro() {
  return (
    <>
    <nav className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-6 md:mb-4">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {CONST_SITE_NAME}
      </h1>
      <p className="text-center md:text-left text-lg mt-5 md:pl-8">
          I'm a student.<br />
          I have a dream: the future where everyone has equal rights to learn anytime, anywhere.
      </p>
      
    </nav>
    <div className="flex flex-col md:flex-row mb-8 md:mb-12">
    <Button url={CONST_REPO_URL} label="Repository" text="You can view the source code." />
    <Button url={CONST_YOUTUBE_URL} label="YouTube" text="Watch my videos on YouTube." />
    <Button url={CONST_TWITTER_URL} label="Twitter" text="Feel free to follow me on Twitter." />
    <Button url={CONST_LAPRAS_URL} label="LAPLAS" text="For more info, visit my LAPRAS." />
    </div>
  </>
  )
}
