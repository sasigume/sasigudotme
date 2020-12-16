import Footer from './footer'
import Meta from './meta'
import SideMenu from './sideMenu'
import {CONST_SITE_NAME, CONST_LOGO_SVG} from '@/libs/constants'

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
        })}>{CONST_LOGO_SVG}</div>
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
