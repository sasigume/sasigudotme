import Container from './container'
import cn from 'classnames'
import {CONST_SITE_URL,} from '@/libs/constants'

// Combining message for each locale
// isPost and slug is come from layout.js
export default function Alert({ preview }) {
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
              <span>This is page is a preview.</span>{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
             <span>Please DM me if there's any problem.</span>
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
