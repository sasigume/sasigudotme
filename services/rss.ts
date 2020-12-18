import fs from "fs"

import {Work, Profile} from './'
import {CONST_SITE_URL, CONST_SITE_NAME, CONST_SITE_META} from './constants'

const generateWorkItem = (work: Work): string => {
    return (`
<item>
    <guid>${CONST_SITE_URL}/works/${work.slug}</guid>
    <title>${work.title}</title>
    <link>${CONST_SITE_URL}/works/${work.slug}</link>
    <pubDate>${new Date(work.date).toUTCString()}</pubDate>
</item>
    `)
}

const generateProfileItem = (profile: Profile): string => {
    return (`
<item>
    <guid>${CONST_SITE_URL}/#${profile.slug}</guid>
    <title>${profile.label}</title>
    <link>${CONST_SITE_URL}/#${profile.slug}</link>
    <pubDate>${new Date(profile.date).toUTCString()}</pubDate>
</item>
    `)
}


const generateRss = (works: Work[],profiles:Profile[]): string => {
    return (`<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>${CONST_SITE_NAME}</title>
        <link>${CONST_SITE_URL}</link>
        <description>${CONST_SITE_META}</description>
        <atom:link href="${CONST_SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
        ${works.map(generateWorkItem).join('')}
        ${profiles.map(generateProfileItem).join('')}
    </channel>
</rss>
    `)
}
const publishRss = async (works: Work[], profiles: Profile[]) => {
    const PATH = './public/rss.xml'
    const rss = generateRss(works,profiles)
    fs.writeFileSync(PATH, rss)
}

export { publishRss }