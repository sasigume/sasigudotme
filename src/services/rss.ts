import fs from "fs"

import {Profile} from './'
import {CONST_SITE_URL, CONST_SITE_NAME, CONST_SITE_META} from './constants'

const generateProfileItem = (profile: Profile): string => {
    return (`
<item>
    <guid>${CONST_SITE_URL}/#${profile.slug}</guid>
    <title>${profile.title}</title>
    <link>${CONST_SITE_URL}/#${profile.slug}</link>
    <pubDate>${new Date(profile.date).toUTCString()}</pubDate>
</item>
    `)
}


const generateRss = (profiles:Profile[]): string => {
    return (`<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>${CONST_SITE_NAME}</title>
        <link>${CONST_SITE_URL}</link>
        <description>${CONST_SITE_META}</description>
        <atom:link href="${CONST_SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
        ${profiles.map(generateProfileItem).join('')}
    </channel>
</rss>
    `)
}
const publishRss = async (profiles: Profile[]) => {
    const PATH = './public/rss.xml'
    const rss = generateRss(profiles)
    fs.writeFileSync(PATH, rss)
}

export { publishRss }