![Screenshot on 12-20-2020](https://github.com/sasigume/sasigudotme/blob/main/screenshots/2020-12-22.png?raw=true)

## Content models required

* The app  **requires these content models on your Contentful space** to run :
  * 'book''
    * 'chapter' : linked to 'book'
  * 'profile'
  * 'skill'

* Note that PostCSS purge is ignoring 'bg-level-(1~4)' to display book level.

## Thanks

### Base Templete

Tthis repository is based on the awesome example below; A very helpful guide included!
https://github.com/vercel/next.js/tree/canary/examples/cms-contentful

### TypeScript Blog Tutorial

https://medium.com/better-programming/create-a-blog-app-with-nextjs-and-contentful-api-7927af49b3b

### RSS Feed

https://blog.kasorin.work/posts/rss_for_nextjs_ssg