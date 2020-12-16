import Footer from './footer'
import Meta from './meta'
import SideMenu from './sideMenu'

// if other than work, "nowWork" is set to false
export default function Layout({ preview, children}) {
  return (
    <>
      <Meta />
      <div className="max-w-screen overflow-hidden min-h-screen flex flex-col md:flex-row bg-yellow-50">
        <aside className="flex-none w-screen md:py-2 md:top-0 md:left-0 md:w-40">
          <SideMenu preview={preview} />
        </aside>
        <main className="bg-white shadow-upYellow md:shadow-leftYellow flex-grow">
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}