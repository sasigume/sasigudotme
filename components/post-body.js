import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import markdownStyles from './markdown-styles.module.css'
import cn from 'classnames'
import {CONST_LOCALE} from '@/libs/constants'

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={cn(markdownStyles['markdown'], {
        'font-noto' : CONST_LOCALE === 'ja-JP'
      })}>
        {documentToReactComponents(content)}
      </div>
    </div>
  )
}