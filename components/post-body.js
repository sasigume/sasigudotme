import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import markdownStyles from './markdown-styles.module.css'
import {CONST_LOCALE} from '@/libs/constants'

export default function PostBody({ content }) {
  let bodyClass
  const mdStl = markdownStyles['markdown']
  CONST_LOCALE == 'ja-JP' ? bodyClass = `font-noto ${mdStl}` : bodyClass = mdStl
  return (
    <div className="max-w-2xl mx-auto">
      <div className={bodyClass}>
        {documentToReactComponents(content)}
      </div>
    </div>
  )
}
