import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
})

const getClient = (preview) => (preview ? previewClient : client)

function parseCreator({ fields }) {
  return {
    name: fields.name,
    slug: fields.slug,
    twitter: fields.twitter ?? [],
    picture: fields.picture.fields.file,
  }
}

function parseWork({ fields }) {
  return {
    title: fields.title,
    slug: fields.slug,
    date: fields.publishedDate,
    content: fields.content,
    excerpt: fields.excerpt ?? [],
    url: fields.url ?? [],
    coverImage: fields.coverImage.fields.file,
    creator: parseCreator(fields.creator),
  }
}

function parseWorkEntries(entries, cb = parseWork) {
  return entries?.items?.map(cb)
}

export async function getPreviewWorkBySlug(slug) {
  const entries = await getClient(true).getEntries({
    content_type: 'work',
    limit: 1,
    'fields.slug[in]': slug,
  })
  return parseWorkEntries(entries)[0]
}

export async function getAllWorksWithSlug() {
  const entries = await client.getEntries({
    content_type: 'work',
    select: 'fields.slug',
  })
  return parseWorkEntries(entries, (work) => work.fields)
}

export async function getAllWorksForHome(preview) {
  const entries = await getClient(preview).getEntries({
    content_type: 'work',
    order: '-fields.publishedDate',
  })
  return parseWorkEntries(entries)
}

export async function getWorkAndMoreWorks(slug, preview) {
  const entry = await getClient(preview).getEntries({
    content_type: 'work',
    limit: 1,
    'fields.slug[in]': slug,
  })
  const entries = await getClient(preview).getEntries({
    content_type: 'work',
    limit: 2,
    order: '-fields.publishedDate',
    'fields.slug[nin]': slug,
  })
  return {
    work: parseWorkEntries(entry)[0],
    moreWorks: parseWorkEntries(entries),
  }
}