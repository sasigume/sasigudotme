import Container from '@/components/container'
import {CONST_REPO_URL, CONST_TWITTER_URL} from '@/libs/constants'


export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-20 flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <a
              href={CONST_TWITTER_URL}
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 md:px-8 duration-200 transition-colors mb-6 md:mb-0"
            >
              Follow me on Twitter
            </a>
            <a
              href={CONST_REPO_URL}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
