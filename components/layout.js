import Alert from '@/components/alert'
import Footer from '@/components/footer'
import Meta from '@/components/meta'

// if other than post, "nowPost" is set to false
export default function Layout({ preview, children}) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
