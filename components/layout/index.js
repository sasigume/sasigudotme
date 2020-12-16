import Footer from './footer'
import Meta from './meta'
import SideMenu from './sideMenu'
import {CONST_SITE_NAME,} from '@/libs/constants'
import cn from 'classnames'

export default function Layout({ preview, children, isHome}) {

  return (
    <>
      <Meta />
      <div className="bg-yellow-50 max-w-screen overflow-y-scroll min-h-screen flex flex-col">
        <div className={cn('flex justify-center items-center text-center',
        {
          "flex-col py-12" : isHome,
          "flex-row py-8" : !isHome
        })}>
          <div className={cn('',
        {
          "w-40 mb-4": isHome,
          "w-20": !isHome
        })}>
          <svg className="hover:animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 275 294"><path fill="#007ca8" d="M149.76 118.3l-48.32-45.06L24.32 0l.2 92.09 76.92 70.48 101.44 92.93"/><path fill="#00f598" d="M148.46 205.08L170.09 92.2V0l-68.65 73.24V294"/><path fill="#ff8300" d="M148.46 205.08L275 92.09l-104.91.11-68.65 70.37L0 255.5"/></svg>
        </div>
          <h1 className="text-4xl uppercase tracking-widest italic">{CONST_SITE_NAME}</h1>
        </div>
        <aside className="">
          <SideMenu preview={preview} />
        </aside>
        <main className="shadow-upYellow transition shadow-upTransparent duration-300 bg-white flex flex-col flex-grow">
          <div className="flex-grow">{children}</div>
          <Footer />
        </main>
      </div>
    </>
  )
}
