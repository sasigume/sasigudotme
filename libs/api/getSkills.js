import {client,previewClient} from './index'
const getClient = (preview) => (preview ? previewClient : client)

function parseSkill({ fields }) {
  return {
    label: fields.label,
    iconStyle: fields.iconStyle ?? 'fas',
    iconName: fields.iconName ?? 'check-square',
    level: fields.level ?? 1
  }
}

function parseSkillEntries(entries, cb = parseSkill) {
  return entries?.items?.map(cb)
}

export async function getAllSkills(preview) {
  const entries = await getClient(preview).getEntries({
    content_type: 'skill',
    order: '-fields.level',
  })
  return parseSkillEntries(entries)
}
