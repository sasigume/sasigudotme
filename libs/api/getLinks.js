import {client, previewClient} from './index'
const getClient = (preview) => (preview ? previewClient : client)

function parseLink({ fields }) {
  return {
    order: fields.order,
    label: fields.label,
    path: fields.path,
    iconStyle: fields.iconStyle ?? 'fas',
    iconName: fields.iconName ?? 'external-link-alt',
  }
}

function parseLinkEntries(entries, cb = parseLink) {
  return entries?.items?.map(cb)
}

export async function getAllLinks(preview) {
  const entries = await getClient(preview).getEntries({
    content_type: 'link',
    order: 'fields.order',
  })
  return parseLinkEntries(entries)
}