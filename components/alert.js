import Container from './container'
import cn from 'classnames'
import {CONST_SITE_URL, CONST_SITE_URL_JA, CONST_LOCALE} from '@/libs/constants'

export default function Alert({ preview, slug }) {
  let thisPage, clickHere, toExit, anotherLang, anotherLink
  if(CONST_LOCALE == 'ja-JP'){
    thisPage = <span>このページはプレビューです。</span>
    clickHere = <span>ここをクリックして</span>
    toExit = <span>プレビューを終了できます。</span>
    anotherLang = <span>Switch to English / 英語版へ切り替える</span>
    anotherLink = CONST_SITE_URL + "/posts/" + slug
  } else {
    thisPage = <span>This is page is a preview.</span>
    clickHere = <span>Click here</span>
    toExit = <span>to exit preview mode.</span>
    anotherLang = <span>日本語版へ切り替える / Switch to Japanese</span>
    anotherLink = CONST_SITE_URL_JA + "/posts/" + slug
  }
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-4 text-center text-sm">
          {preview ? (
            <>
              {thisPage}{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                {clickHere}
              </a>{' '}
              {toExit}
            </>
          ) : (
            <>
             <a href={anotherLink} className="underline hover:text-success duration-200 transition-colors">{anotherLang}</a>
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
