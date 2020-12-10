import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types';
import markdownStyles from './markdown-styles.module.css'

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
  console.log(content)
  return documentToReactComponents(content, richTextOptions)
}

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles['markdown']}>
        {ContentfulRichText(content)}
      </div>
    </div>
  )
}