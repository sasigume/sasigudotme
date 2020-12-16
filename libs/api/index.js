// 以下は必須
import { createClient } from 'contentful'

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
})

// 必須ここまで

import {getAllWorksForHome, getAllWorksWithSlug, getPreviewWorkBySlug, getWorkAndMoreWorks} from './getWorks'
import {getAllSkills} from './getSkills'
import {getAllLinks} from './getLinks'


export {
  getAllWorksForHome, getAllWorksWithSlug, getPreviewWorkBySlug, getWorkAndMoreWorks,
  getAllSkills,
  getAllLinks
}