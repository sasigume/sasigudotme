import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types';
import markdownStyles from './markdown-styles.module.css'
import { ReactElement } from 'react'
import { Work } from '../services'

type WorkBodyProps = {
  work: Work
}


const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { file } = node.data.target.fields
      return <a href={file.url} target="_blank">
        <img src={file.url} alt={file.title} title={file.title} />
        </a>
    },
    [BLOCKS.UL_LIST]:(node,children) => {
      return <ul className="list-disc">{children}</ul>
    }
  }
}

let ContentfulRichText = function(content){
  return documentToReactComponents(content, richTextOptions)
}

export default function WorkBody({ work }:WorkBodyProps):ReactElement {
  return (
    <div className={markdownStyles['markdown']}>
        {ContentfulRichText(work.content)}
    </div>
  )
}