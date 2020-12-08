import Alert from '@/components/alert'
import Footer from '@/components/footer'
import Meta from '@/components/meta'

export default function Layout({ preview, children, slug }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} slug={slug} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
