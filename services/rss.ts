import fs from "fs"

import {Work} from './work.types'
import {CONST_SITE_URL, CONST_SITE_NAME, CONST_SITE_META} from './constants'

const generateRssItem = (work: Work): string => {
    return (`
<item>
    <guid>${CONST_SITE_URL}/works/${work.slug}</guid>
    <title>${work.title}</title>
    <link>${CONST_SITE_URL}/works/${work.slug}</link>
    <pubDate>${new Date(work.date).toUTCString()}</pubDate>
</item>
    `)
}

const generateRss = (works: Work[]): string => {
    return (`<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>${CONST_SITE_NAME}</title>
        <link>${CONST_SITE_URL}</link>
        <description>${CONST_SITE_META}</description>
        <atom:link href="${CONST_SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
        ${works.map(generateRssItem).join('')}
    </channel>
</rss>
    `)
}
const publishRss = async (works: Work[]) => {
    const PATH = './public/rss.xml'
    const rss = generateRss(works)
    fs.writeFileSync(PATH, rss)
}

export { publishRss }