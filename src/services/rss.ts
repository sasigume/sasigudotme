import fs from "fs"

import { Profile, Book } from './'
import { CONST_SITE_URL, CONST_SITE_NAME, CONST_SITE_META } from '../libs/constants'

const escapeString = (unsafe: string) => {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

const generateProfileItem = (profile: Profile): string => {
    return (`
<item>
    <guid>${CONST_SITE_URL}/#${profile.slug}</guid>
    <title>${escapeString(profile.title)}</title>
    <link>${CONST_SITE_URL}/#${profile.slug}</link>
    <pubDate>${new Date(profile.date).toUTCString()}</pubDate>
</item>
    `)
}

const generateBookItem = (book: Book): string => {
    let summary = ""
    if (book.bought) {
        summary = (`${book.dateGet}に買った本。${book.md}`);
    } else {
        summary = (`${book.dateGet}にもらった本。${book.md}`)
    }
    return (`
<item>
    <guid>${CONST_SITE_URL}/books/${book.slug}</guid>
    <title>${escapeString(book.title)}</title>
    <link>${CONST_SITE_URL}/books/${book.slug}</link>
    <pubDate>${new Date(book.dateCreated).toUTCString()}</pubDate>
    <summary>${summary}</summary>
</item>
    `)
}


const generateRss = (profiles: Profile[], books: Book[]): string => {
    return (`<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>${CONST_SITE_NAME}</title>
        <link>${CONST_SITE_URL}</link>
        <description>${CONST_SITE_META}</description>
        <atom:link href="${CONST_SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
        ${profiles.map(generateProfileItem).join('')}
        ${books.map(generateBookItem).join('')}
    </channel>
</rss>
    `)
}
const publishRss = async (profiles: Profile[], books: Book[]) => {
    const PATH = './public/rss.xml'
    const rss = generateRss(profiles, books)
    fs.writeFileSync(PATH, rss)
}

export { publishRss }