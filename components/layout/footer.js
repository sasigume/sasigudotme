import Container from '@/components/container'
import {CONST_REPO_URL} from '@/libs/constants'


export default function Footer() {
  return (
    <footer className="mt-auto bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-20 flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <a
              href={CONST_REPO_URL}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
            <small className="mx-3">&copy; Ryo Ando a.k.a. sasigume 2020</small>
          </div>
        </div>
      </Container>
    </footer>
  )
}
