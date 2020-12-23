import Footer from './footer'
import Meta from './meta'
import Nav from './nav'
import Link from 'next/link'
import cn from 'classnames'
import { CONST_MYNAME, CONST_MESSAGE } from '../../libs/constants'

export default function Layout({ preview, children, isBlack }) {

  return (
    <>
      <Meta />
      <div id="#" className={cn('max-w-screen overflow-y-scroll min-h-screen flex flex-col',
        {
          'text-white bg-black': isBlack,
          'text-black bg-sasibg': !isBlack
        })}>
        <section className="flex justify-center items-center text-center flex-row py-8">
          <Link href="/">
            <a>
              <div className="w-20 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 275 294"><path fill="#007ca8" d="M149.76 118.3l-48.32-45.06L24.32 0l.2 92.09 76.92 70.48 101.44 92.93" /><path fill="#00f598" d="M148.46 205.08L170.09 92.2V0l-68.65 73.24V294" /><path fill="#ff8300" d="M148.46 205.08L275 92.09l-104.91.11-68.65 70.37L0 255.5" /></svg>
              </div>
            </a>
          </Link>
          <Link href="/">
            <a>
              <h1 className="text-4xl uppercase tracking-widest">{CONST_MYNAME}</h1>
              <div className="mt-2 text-2xl">{CONST_MESSAGE}</div>
            </a>
          </Link>
        </section>
        <nav className="">
          <Nav preview={preview} />
        </nav>
        <main className={cn('shadow-up', {
          'bg-white': !isBlack
        })}>
          <div className="flex-grow">{children}</div>
          <div className="text-center pb-8"><a href="#" className="hover:underline">
            &#8679; BACK TO TOP</a>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
