import Footer from './footer'
import Meta from './meta'
import Nav from './nav'
import Container from '../container'
import cn from 'classnames'
import { CONST_MYNAME, CONST_MESSAGE } from '../../libs/constants'

export default function Layout({ children }) {

  return (
    <>
      <Meta />
      <div id="#" className="max-w-screen overflow-y-scroll min-h-screen flex flex-col">
        <Container>
          <div className="py-20 flex flex-row items-end justify-center">
            <div>
              <div className="w-20 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 275 294"><path fill="#007ca8" d="M149.76 118.3l-48.32-45.06L24.32 0l.2 92.09 76.92 70.48 101.44 92.93" /><path fill="#00f598" d="M148.46 205.08L170.09 92.2V0l-68.65 73.24V294" /><path fill="#ff8300" d="M148.46 205.08L275 92.09l-104.91.11-68.65 70.37L0 255.5" /></svg>
              </div>
              <div>
                <h1 className="text-4xl mb-2">{CONST_MYNAME}</h1>
                <div className="lg:w-auto text-md">{CONST_MESSAGE}</div>
              </div>
            </div>
            <div className="ml-8">
              <Nav />
            </div>
          </div>
        </Container>

        <main className="">
          <div className="flex-grow">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  )
}
